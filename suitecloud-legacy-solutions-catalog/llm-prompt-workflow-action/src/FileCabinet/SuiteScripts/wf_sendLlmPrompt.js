/**
 * @NApiVersion 2.1
 * @NScriptType WorkflowActionScript
 * @author SuiteFlow LLM Action Script
 * @description This workflow action uses the N/llm module to send a prompt to the configured LLM and stores the response on the target record.
 */

define(['N/llm', 'N/record', 'N/error', 'N/runtime', 'N/log'],
  /**
     * SuiteFlow LLM Prompt Workflow Action
     * Business logic, adapter, and workflow action orchestration layers are separated per Onion/Hexagonal Architecture.
     */ (llm, record, error, runtime, log) => {
    // Domain Model: LLMPromptRequest
    class LLMPromptRequest {
      constructor ({ prompt, currentRecord }) {
        this.prompt = prompt
        this.currentRecord = currentRecord
      }
    }

    // Domain Model: LLMPromptResponse
    class LLMPromptResponse {
      constructor ({ content }) {
        this.content = content
      }
    }

    // Port: LLMServicePort
    class LLMServicePort {
      async sendPrompt (llmPromptRequest) { throw new Error('Not implemented') }
    }

    // Adapter: LLMServiceAdapter (uses N/llm)
    class LLMServiceAdapter extends LLMServicePort {
      async sendPrompt (llmPromptRequest) {
        log.audit('LLM Request', llmPromptRequest)
        log.audit('LLM Remaining Free Usage', await llm.getRemainingFreeUsage.promise())
        try {
          const options = {
            prompt: `${llmPromptRequest.prompt}
              **Current Record Details**
              ${JSON.stringify(llmPromptRequest.currentRecord)}
              - Your response MUST NOT exceed 256 characters!
              - MUST focus on business data within the data ignore purely technical system details`
          }
          log.audit('LLM Prompt', options.prompt)

          // The response may be a string or an object depending on LLM config; wrap it in a DTO.
          const llmResult = await llm.generateText.promise(options)
          log.debug('LLM Result', llmResult)

          const response = new LLMPromptResponse({ content: typeof llmResult === 'string' ? llmResult : llmResult.text })
          log.audit('LLM Response', response)
          return response
        } catch (e) {
          throw error.create({
            name: 'LLM_REQUEST_FAILED',
            message: `Failed to get completion from LLM: ${e.message}
              ${JSON.stringify(e)}`,
            notifyOff: false
          })
        }
      }
    }

    // Application Service: Orchestrates prompt, response, record update
    class LLMWorkflowActionService {
      constructor ({ llmService, logger }) {
        this.llmService = llmService // Port (interface)
        this.logger = logger
      }

      /**
             * Executes the workflow action
             * @param {Object} context NetSuite workflow context
             */
      async execute (context) {
        // Get prompt text from a script parameter set in custom action configuration
        const scriptObj = runtime.getCurrentScript()
        const promptText = scriptObj.getParameter({ name: 'custscript_llm_prompttext' }) // param id should match what's in SDF

        if (!promptText || typeof promptText !== 'string' || promptText.trim().length < 5) {
          throw error.create({
            name: 'INVALID_PROMPT',
            message: 'Prompt (script parameter "custscript_llm_prompttext") must be a non-empty string of at least 5 characters.',
            notifyOff: false
          })
        }

        const req = new LLMPromptRequest({
          prompt: promptText,
          currentRecord: context.newRecord,
        })
        const res = await this.llmService.sendPrompt(req)

        // Return the result text directly for "Store Result In" to work
        return res.content
      }
    }

    /**
         * Main workflowAction entry point
         * @param {Object} context WorkflowActionScriptContext
         */
    async function onAction (context) {
      const llmService = new LLMServiceAdapter()
      const appService = new LLMWorkflowActionService({ llmService, logger: log })
      // Return the model result so workflow "store result in" captures it
      return appService.execute(context)
    }

    return { onAction }
  })
