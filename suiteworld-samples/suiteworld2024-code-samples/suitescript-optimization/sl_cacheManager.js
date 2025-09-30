/**
 *
 * @NScriptType Suitelet
 * @NApiVersion 2.1
 *
 */
define(['N/cache', 'N/ui/serverWidget', 'N/redirect'], (cache, serverWidget, redirect) => {
  return {
    onRequest: (context) => {
      if (context.request.method == 'GET') {
        const appCache = cache.getCache({ name: 'APP_CACHE', scope: cache.Scope.PUBLIC });
        const perStateMatrixCache = appCache.get({ key: 'perStateShippingMatrix' });

        const form = serverWidget.createForm({
          title: 'Cache Manager'
        });

        const cacheField = form.addField({
          id: 'cache_value',
          type: serverWidget.FieldType.TEXTAREA,
          label: 'Cache Value'
        });

        form.updateDefaultValues({
          cache_value: JSON.parse(perStateMatrixCache) ? JSON.parse(perStateMatrixCache).body : `-- CACHE is EMPTY --`
        });

        cacheField.updateDisplayType({ displayType: serverWidget.FieldDisplayType.INLINE });

        form.addSubmitButton({
          label: 'Purge Cache'
        });

        context.response.writePage(form);
      } else {
        const appCache = cache.getCache({ name: 'APP_CACHE', scope: cache.Scope.PUBLIC });

        appCache.remove({
          key: 'perStateShippingMatrix'
        });

        redirect.toSuitelet({
          scriptId: 'customscript_cache_manager',
          deploymentId: 'customdeploy_cache_manager'
        });
      }
    }
  };
});
