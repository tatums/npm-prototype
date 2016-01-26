define(function (require) {

  var a = require('./../node_modules/widget-a/index.js');
  var b = require('./../node_modules/widget-b/index.js');
  console.log(a.getCore());
  console.log(a.getHello());

  console.log(b.getCore());
  console.log(b.getHello());

  var messages = require('./app/messages');
  console.log(messages.getHello());
});
