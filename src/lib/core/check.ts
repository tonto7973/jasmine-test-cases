import { type } from './type';

export class Check {

    static isArray<T>(arg: T, error?: string): T {
        if (!Array.isArray(arg)) {
            throw new Error(error || `Expected an [Array] but ${type(arg)} given`);
        }
        return arg;
    }

    static isFunction<T>(arg: T, error?: string): T {
        if (!(typeof arg === 'function')) {
            throw new Error(error || `Expected a [Function] but ${type(arg)} given`);
        }
        return arg;
    }

}
