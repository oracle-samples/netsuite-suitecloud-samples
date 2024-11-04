/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
import { EntryPoints } from "N/types";
import runtime from "N/runtime";
import log from "N/log";

export function onRequest(context: EntryPoints.Suitelet.onRequestContext) {
  const remainingUsage = runtime.getCurrentScript().getRemainingUsage();
  const userRole = runtime.getCurrentUser().role;
  const currentSession = runtime.getCurrentSession();

  // Set the current sessions's scope
  currentSession.set({
    name: "scope",
    value: "global",
  });

  const sessionScope = runtime.getCurrentSession().get({
    name: "scope",
  });

  log.debug("Remaining Usage:", remainingUsage);
  log.debug("Role:", userRole);
  log.debug("Session Scope:", sessionScope);

  context.response.write(
    "Executing under role: " +
      userRole +
      ". Session scope: " +
      sessionScope +
      "."
  );
}
