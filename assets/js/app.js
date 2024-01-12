// app.js for concatenation of smaller libraryies
// to reduce http requests of small files
'use strict';

// import core.js
import '@hyas/core/assets/js/core.js';

// Import mode.js
import 'js/mode.js';

// Import custom.js
import 'js/custom.js';

/*
import * as params from '@params';

if (params.env === 'development') {
  console.log('Hugo development environment')
} else {
  console.log('Hugo production environment')
}
*/
