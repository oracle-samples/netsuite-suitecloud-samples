import { useState } from "react";
import { useApp } from "@modelcontextprotocol/ext-apps/react";

export function App() {
  const [messageText, setMessageText] = useState("Hello world");
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [submitMessage, setSubmitMessage] = useState("");

  const { app, isConnected, error } = useApp({
    appInfo: { name: "helloworld_app", version: "1.0.0" },
    capabilities: {},
  });

  const handleSubmit = async () => {
    if (!app) {
      setSubmitState("error");
      setSubmitMessage("The MCP app runtime is not available.");
      return;
    }

    setSubmitState("submitting");
    setSubmitMessage("");

    try {
      const result = await app.sendMessage({
        role: "user",
        content: [{ type: "text", text: messageText }],
      });

      if (result.isError) {
        setSubmitState("error");
        setSubmitMessage("The MCP client rejected the message.");
        return;
      }

      setSubmitState("success");
      setSubmitMessage("Message sent to chat.");
    } catch (submitError) {
      setSubmitState("error");
      setSubmitMessage(
        submitError instanceof Error ? submitError.message : "Failed to send the message.",
      );
    }
  };

  return (
    <div className="ns-shell">
      <section className="ns-report">
        {error ? (
          <div className="ns-loading-state">
            <p className="ns-loading-title">Unable to load app</p>
            <p className="ns-loading-copy">{error.message}</p>
          </div>
        ) : !isConnected ? (
          <div className="ns-loading-state">
            <div className="ns-spinner" aria-hidden="true" />
            <p className="ns-loading-title">Loading app</p>
            <p className="ns-loading-copy">Connecting to the MCP host runtime...</p>
          </div>
        ) : (
          <>
            <div className="ns-filter-bar">
              <div className="ns-hello-intro">
                <h1 className="ns-hello-title">Hello World</h1>
              </div>

              <div className="field-card">
                <label htmlFor="message">Message</label>
                <input
                  id="message"
                  type="text"
                  value={messageText}
                  onChange={(event) => {
                    setMessageText(event.target.value);
                    if (submitState !== "idle") {
                      setSubmitState("idle");
                      setSubmitMessage("");
                    }
                  }}
                />
              </div>
            </div>

            <div className="ns-footer">
              <div className="button-row">
                <button type="button" onClick={handleSubmit} disabled={submitState === "submitting"}>
                  {submitState === "submitting" ? "Sending..." : "Send to chat"}
                </button>
              </div>

              <p
                className={`ns-submit-status${submitState === "idle" ? " is-hidden" : ""}${
                  submitState === "error" ? " is-error" : " is-success"
                }`}
                role="status"
              >
                {submitMessage}
              </p>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
