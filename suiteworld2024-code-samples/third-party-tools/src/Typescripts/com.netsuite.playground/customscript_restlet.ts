/**
 * @NApiVersion 2.1
 * @NScriptType Restlet
 */
import { EntryPoints } from "N/types";

export const get: EntryPoints.RESTlet.get = (parameters) => {
  return JSON.stringify("Hello everyone from GET function");
};
export const post: EntryPoints.RESTlet.post = (dataIn) => {
  return JSON.stringify("Hello everyone from POST function");
};
export const delete_: EntryPoints.RESTlet.delete_ = (parameters) => {
  return JSON.stringify("Hello everyone from DELETE function");
};
export const put: EntryPoints.RESTlet.put = (dataIn) => {
  return JSON.stringify("Hello everyone from PUT function");
};
