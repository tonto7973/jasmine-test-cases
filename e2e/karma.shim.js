require('jasmine-expect');

Error.stackTraceLimit = Infinity;

const testContext = require.context('./test/', true, /\.spec\.ts$/);
testContext.keys().forEach(testContext);
