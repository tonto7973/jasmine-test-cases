require('jasmine-expect');
require('./../src/index').enableColors(true); // require('jasmine-test-cases').enableColors(true);

Error.stackTraceLimit = Infinity;

const testContext = require.context('./test/', true, /\.spec\.ts$/);
testContext.keys().forEach(testContext);
