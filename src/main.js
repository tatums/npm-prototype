var items = [{obj: 'messages', path: './app/messages'}];

define(function (require) {
  var w = require('./../node_modules/widget-a/index.js');
  console.log(w.getHello());
  console.log(w.getCore());

  items.forEach(function(item){
    console.log(item);
  })


  var messages = require('./app/messages');
  console.log(messages.getHello());
});
