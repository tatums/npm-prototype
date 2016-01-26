define(function (require) {
  var c = require('node_modules/core/index.js');
    return {
        getHello: function () {
            return 'Hello World from Widget-B';
        },
        getCore: c.getHello
    };
});
