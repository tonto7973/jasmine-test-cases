require('source-map-support').install();
require('jasmine-expect');
require('./../src/index').enableColors(true); // require('jasmine-test-cases').enableColors(true);

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
        displayPending: false        
    }
}));
