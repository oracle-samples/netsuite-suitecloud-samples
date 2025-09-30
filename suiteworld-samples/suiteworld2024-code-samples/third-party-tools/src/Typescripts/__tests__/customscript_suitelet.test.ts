import { onRequest } from "../com.netsuite.playground/customscript_suitelet";
import runtime from "N/runtime";
import log from "N/log";

jest.mock("N/runtime");
jest.mock("N/log");

describe("customscript_suitelet", () => {
  const testRemainingUsage = 1;
  const testRole = 5;
  const testScopeValue = "testScope";
  const mockUser = { role: testRole };

  beforeEach(() => {
    jest.clearAllMocks();
    const mockSession = {
      set: jest.fn(() => {}),
      get: jest.fn(() => testScopeValue),
    };

    (runtime.getCurrentScript as jest.Mock).mockReturnValue({
      getRemainingUsage: () => 1,
    });
    (runtime.getCurrentUser as jest.Mock).mockReturnValue(mockUser);
    (runtime.getCurrentSession as jest.Mock).mockReturnValue(mockSession);
  });

  it("should return role and session information", () => {
    // ARRANGE
    const mockContext: any = {
      request: {
        method: "GET",
      },
      response: {
        write: jest.fn(),
      },
    };

    // ACT
    onRequest(mockContext);

    // ASSERT
    expect(mockContext.response.write).toHaveBeenCalledWith(
      "Executing under role: 5. Session scope: testScope."
    );
  });

  it("should log information", () => {
    // ARRANGE
    const mockContext: any = {
      request: {
        method: "GET",
      },
      response: {
        write: jest.fn(),
      },
    };

    // ACT
    onRequest(mockContext);

    // ASSERT
    expect(log.debug).toHaveBeenNthCalledWith(
      1,
      "Remaining Usage:",
      testRemainingUsage
    );
    expect(log.debug).toHaveBeenNthCalledWith(2, "Role:", testRole);
    expect(log.debug).toHaveBeenNthCalledWith(
      3,
      "Session Scope:",
      testScopeValue
    );
  });
});
