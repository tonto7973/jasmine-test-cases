import { Check } from './check';
import { expectify } from './expectify';
import { colorify } from './colorify';

export const parametrify = (
        getArgs: () => Array<any>,
        original: (expectation: string, assertion?: (done?: DoneFn) => void, timeout?: number) => any) => {
    Check.isFunction(getArgs);
    Check.isFunction(original);
    return (expectation: string, assertion?: () => void, timeout?: number): any => {
        const run = (args: Array<any>): any => {
            const message = expectation + ' ' + colorify(expectify(args));
            if (typeof assertion !== 'function') {
                return original(message, assertion, timeout);
            } else if (assertion.length > args.length) {
                return original(message, function(doneFn: any) { return assertion.apply(this, args.concat([doneFn]) as never); }, timeout);
            } else {
                return original(message, function() { return assertion.apply(this, args as never); }, timeout);
            }
        };
        // see https://github.com/jasmine/jasmine/blob/9472df0db499679534143b7956ea83281bb0e02e/src/core/Spec.js
        const runnables = Check.isArray(getArgs()).map(run);
        return runnables[0];
    };
};
