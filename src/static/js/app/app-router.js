define(function (require, exports, module) {

var marionette = require("marionette");
var AppController = require("app/app-controller").AppController;

var AppRouter = marionette.AppRouter.extend({
    controller: new AppController(),
    appRoutes:{
        "*default":"default",
    }
});

exports.AppRouter = AppRouter;

});