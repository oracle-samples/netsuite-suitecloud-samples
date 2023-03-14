define(['./Form', './Button'], (Form, Button) => {
    const serverWidget = () => {};

    serverWidget.prototype.createForm = () => {};
    serverWidget.prototype.createAssistant = () => {};
    serverWidget.prototype.createList = () => {};
  
    return new serverWidget();
});
