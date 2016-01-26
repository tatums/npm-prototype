define(function (require) {

  var core = require('node_modules/core/index.js');
  var fn = function () {
    alert(core.getHello());
  }
  var button = window.document.createElement("button");
  button.innerHTML = "[+] Feedback - Widget A";
  button.onclick = fn;
  window.document.body.appendChild(button);
});
