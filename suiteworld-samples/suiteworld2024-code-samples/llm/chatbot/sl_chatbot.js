/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */

define(['N/ui/serverWidget', 'N/llm'], function (serverWidget, llm) {
  function onRequest(context) {

      var form = serverWidget.createForm({
              title: 'Chat Bot'
          });
      var fieldgroup = form.addFieldGroup({
          id : 'fieldgroupid',
          label : 'Chat'
      });
      fieldgroup.isSingleColumn = true;
      var historySize = parseInt(context.request.parameters["custpage_num_chats"] || "0");
      var numChats = form.addField({
          id: 'custpage_num_chats',
          type: serverWidget.FieldType.INTEGER,
          container:'fieldgroupid',
          label: "History Size",
      })
      numChats.updateDisplayType({displayType:serverWidget.FieldDisplayType.HIDDEN});

      if (context.request.method === 'POST') {
          numChats.defaultValue = historySize + 2;
          var chatHistory = [];
          for (var i = historySize - 2; i >= 0; i-=2)
          {
              var you = form.addField({
                  id: 'custpage_hist' + (i + 2),
                  type: serverWidget.FieldType.TEXTAREA,
                  label: 'You',
                  container:'fieldgroupid'
              });
              var yourMessage = context.request.parameters["custpage_hist"+i]
              you.defaultValue = yourMessage;
              you.updateDisplayType({displayType:serverWidget.FieldDisplayType.INLINE});

              var chatbot = form.addField({
                  id: 'custpage_hist' + (i + 3),
                  type: serverWidget.FieldType.TEXTAREA,
                  label: 'ChatBot',
                  container:'fieldgroupid'
              });
              var chatBotMessage = context.request.parameters["custpage_hist"+(i+1)];
              chatbot.defaultValue = chatBotMessage;
              chatbot.updateDisplayType({displayType:serverWidget.FieldDisplayType.INLINE});
              chatHistory.push({role:llm.ChatRole.USER, text: yourMessage});
              chatHistory.push({role:llm.ChatRole.CHATBOT, text: chatBotMessage});
          }

          var prompt = context.request.parameters["custpage_text"];
          var promptField = form.addField({
              id: 'custpage_hist0',
              type: serverWidget.FieldType.TEXTAREA,
              label: 'You',
              container:'fieldgroupid'
          });
          promptField.defaultValue = prompt;
          promptField.updateDisplayType({displayType:serverWidget.FieldDisplayType.INLINE});
          var result = form.addField({
              id: 'custpage_hist1',
              type: serverWidget.FieldType.TEXTAREA,
              label: 'ChatBot',
              container:'fieldgroupid'
          });
          result.defaultValue = llm.generateText({
              prompt:prompt,
              chatHistory: chatHistory
          }).text;
          result.updateDisplayType({displayType:serverWidget.FieldDisplayType.INLINE});
      }
      else
          numChats.defaultValue = 0;

      var prompt = form.addField({
          id: 'custpage_text',
          type: serverWidget.FieldType.TEXTAREA,
          label: 'Prompt',
          container:'fieldgroupid'
      });

      form.addSubmitButton({
          label: 'Submit'
      });

     context.response.writePage(form);

  }

  return {
      onRequest: onRequest
  };
});