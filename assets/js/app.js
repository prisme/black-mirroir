var router = require('router');
var common = require('common');

// Store the root of your application, used for routing
window._ROOT = '/lib/browserify-template'; 

// Start router
router.route(_ROOT);

// Global stuff (not module-dependant, preloading, etc)