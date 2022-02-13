require('source-map-support').install();
require('jasmine-expect');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter,
      mock = require('mock-require'),
      context = (typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
context.mock = mock;
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
        displayPending: false        
    }
}));
