import { parametrify } from './parametrify';
import { type } from './type';
import { Check } from './check';

export const wrap = (getRuns: () => Array<any>, context: any, test: 'it'|'xit'|'fit') => {

    if (typeof context === 'undefined' || context === null) {
        throw new TypeError('Context is undefined');
    }

    const original: (expectation: string, assertion?: (done: DoneFn) => void, timeout?: number) => void = Check.isFunction(context[test],
            `Expected context.${test}() to be a [Function] but ${type(context[test])} found`);

    const parametrized: any = parametrify(getRuns, original);

    return parametrized;
};
