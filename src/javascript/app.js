/* Load dependencies */
var Subsumer = require('subsumer');
var ko = require('knockout');
require('./libs/jquery');
require('./libs/knockout-postbox');



/* Load modules */
var Logger = require('./services/logger/logger');
var LuidHandler = require('./modules/luid/luidHandler');
var YearHandler = require('./modules/year/yearHandler');
var SomeModule = require('./modules/some/someModule');



/* IoC bootstraper */
var kernel = new Subsumer();
kernel.bind('knockout').to(ko);
kernel.bind('logger').to(Logger).asSingleton();
kernel.bind('router').to(crossroads);



/* Get module instances */
var luidHandlerVm = kernel.instantiate(LuidHandler);
var yearHandlerVm = kernel.instantiate(YearHandler);
var someModuleVm = kernel.instantiate(SomeModule);



/* Bind viewmodels to DOM */
$(function(){
	ko.applyBindings(luidHandlerVm, document.getElementById('luidHandler'));
	ko.applyBindings(yearHandlerVm, document.getElementById('yearHandler'));
	ko.applyBindings(someModuleVm, document.getElementById('someModule'));
});