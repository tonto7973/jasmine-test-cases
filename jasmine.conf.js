require('source-map-support').install();
require('jasmine-expect');
const ConsoleReporter = require('jasmine-console-reporter'),
      mock = require('mock-require'),
      context = (typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
context.mock = mock;
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new ConsoleReporter({
    colors: 1,
    cleanStack: 3,
    verbosity: 4,
    listStyle: 'indent',
    activity: false,
    emoji: false,
    beep: false
}));
