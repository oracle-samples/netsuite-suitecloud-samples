jest.mock('N/llm', () => ({
    generateText: {
        promise: jest.fn()
    },
    getRemainingFreeUsage: {
        promise: jest.fn()
    }
}), { virtual: true });

jest.mock('N/record');
jest.mock('N/runtime');
jest.mock('N/log');
jest.mock('N/error', () => ({
    create: jest.fn((options) => {
        const err = new Error(options.message);
        err.name = options.name;
        return err;
    })
}));


import script from '../src/FileCabinet/SuiteScripts/wf_sendLlmPrompt';
import llm from 'N/llm';
import runtime from 'N/runtime';
import log from 'N/log';
import error from 'N/error';

beforeEach(() => {
    jest.clearAllMocks();
});

describe('wf_sendLlmPrompt script test', () => {

    it('should successfully execute onAction and return LLM response', async () => {
        // given
        const context = {
            newRecord: { id: 123, type: 'salesorder' }
        };
        const mockPromptText = 'This is a test prompt';
        const mockLlmResponse = 'This is a test LLM response';

        runtime.getCurrentScript.mockReturnValue({
            getParameter: jest.fn().mockReturnValue(mockPromptText)
        });

        llm.getRemainingFreeUsage.promise.mockResolvedValue(100);

        llm.generateText.promise.mockResolvedValue({ text: mockLlmResponse });

        const result = await script.onAction(context);

        expect(result).toBe(mockLlmResponse);
        expect(llm.generateText.promise).toHaveBeenCalledWith(expect.objectContaining({
            prompt: expect.stringContaining(mockPromptText)
        }));
        expect(log.audit).toHaveBeenCalled();
    });

    it('should throw an error if the prompt parameter is too short', async () => {
        // given
        const context = { newRecord: { id: 123 } };

        runtime.getCurrentScript.mockReturnValue({
            getParameter: jest.fn().mockReturnValue('abcd') // Too short (< 5)
        });

        await expect(script.onAction(context)).rejects.toThrow();
        expect(error.create).toHaveBeenCalledWith(expect.objectContaining({
            name: 'INVALID_PROMPT'
        }));
    });

    it('should handle LLM request failure and throw LLM_REQUEST_FAILED', async () => {

        const context = { newRecord: { id: 123 } };

        runtime.getCurrentScript.mockReturnValue({
            getParameter: jest.fn().mockReturnValue('Valid Long Prompt')
        });

        llm.getRemainingFreeUsage.promise.mockResolvedValue(100);
        llm.generateText.promise.mockRejectedValue(new Error('API Failure'));

        await expect(script.onAction(context)).rejects.toThrow();
        expect(error.create).toHaveBeenCalledWith(expect.objectContaining({
            name: 'LLM_REQUEST_FAILED'
        }));
    });
});