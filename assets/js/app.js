var router = require('router');
var common = require('common');

// Store the root of your application, used for routing
window._ROOT = '/lib/black-mirroir'; 

// Start router
router.init(_ROOT);

// Global stuff (not module-dependant, preloading, etc)