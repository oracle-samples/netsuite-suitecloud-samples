/**!
  * @NApiVersion 2.1
  * @NScriptType Suitelet
  */
define(["exports","N/runtime","N/log"],(function(e,n,s){"use strict";e.onRequest=function(e){const t=n.getCurrentScript().getRemainingUsage(),o=n.getCurrentUser().role;n.getCurrentSession().set({name:"scope",value:"global"});const r=n.getCurrentSession().get({name:"scope"});s.debug("Remaining Usage:",t),s.debug("Role:",o),s.debug("Session Scope:",r),e.response.write("Executing under role: "+o+". Session scope: "+r+".")}}));
