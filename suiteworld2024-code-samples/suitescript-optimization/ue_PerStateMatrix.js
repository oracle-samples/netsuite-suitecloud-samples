/**
*
* @NScriptType UserEventScript
* @NApiVersion 2.1
*
*/

// Applied to Sales Order

// Call an external API before the employee record gets saved.

define(['N/cache', 'N/https'], (cache, https) =>{
  return {
    beforeSubmit: (context)=> {
      let startTime = Date.now();

      const appCache = cache.getCache({name: 'APP_CACHE', scope: cache.Scope.PUBLIC});

      const perStateMatrixCache = appCache.get(
        {
          key: 'perStateShippingMatrix',
          loader: () => {
            return https.get({url: "https://run.mocky.io/v3/a8da3ed0-6353-43d1-87fa-b4a29ad36e63?mocky-delay=5s"});
          },
          ttl: 300 //seconds
        })

      const responseBody =  JSON.parse(perStateMatrixCache).body;
      const parsedBody = JSON.parse(responseBody);

      let salesOrder = context.newRecord;

      let shipState = salesOrder.getValue({
        fieldId: 'shipstate'
      })

      salesOrder.setValue({
        fieldId: 'custbody_shipping_rate',
        value: parsedBody[shipState]
      });

      salesOrder.setValue({
        fieldId : 'custbody_rate_timestamp',
        value : new Date()
      });

      log.debug({title:`Shipping Matrix Contents`, details: `${JSON.parse(perStateMatrixCache).body}`});

      log.debug({title:'Time elapsed', details: `${Date.now()-startTime}ms`});


    }
  }

})
