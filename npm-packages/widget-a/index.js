define(function (require) {
  var c = require('node_modules/core/index.js');
    return {
        getHello: function () {
            return 'Hello World from Widget-A';
        },
        getCore: c.getHello
    };
});
