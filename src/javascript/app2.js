/* Load dependencies. */
var Bookie = require('./libs/bookie');
require('./libs/knockout-postbox');


/* Create new app */
var app = new Bookie();


/* Load modules and services. */
var modules = require('./modules/modules');
var services = require('./services/services');


/* Register modules and services. */
app.registerServices(services);
app.registerModules(modules);


/* Manually bind other dependencies, using the provided ioc container. */
app.container.bind("router").to({});


/* Resolve and bind modules to DOM. Will use the defined template names. */
app.resolveAndBindModules();


/* Debug stuff */
window.ko = app.container.resolve('knockout');