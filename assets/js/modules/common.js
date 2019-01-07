var pubsub = require('pubsub');

// Only native resize listener on site
window.addEventListener('resize', resize, false);

// Can be forced from any
pubsub.on('global-resize', resize);

// Global resize
function resize() {
    pubsub.emit('resize', window.innerWidth, window.innerHeight);
}
