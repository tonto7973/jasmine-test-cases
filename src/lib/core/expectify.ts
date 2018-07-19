import { Check } from './check';
import { type } from './type';

export const expectify = (args: Array<any>) => {
    Check.isArray(args);
    return '[' + args.reduce((previous, current) => {
        if (current === undefined) {
            current = 'undefined';
        } else if (typeof current === 'function') {
            current = '\u0192'; // ƒ
        } else if (type(current) === '[RegExp]') {
            current = '/' + current.source + '/' + current.flags;
        } else if (type(current) === '[Symbol]') {
            current = '#';
        } else if (type(current) === '[Number]' && current === Infinity) {
            current = '\u221E';
        } else if (type(current) === '[Number]' && current === -Infinity) {
            current = '-\u221E';
        } else if (type(current) === '[Number]' && isNaN(current)) {
            current = 'NaN';
        } else if (type(current) === '[Number]' && current === 0 && 1 / current < 0) {
            current = '-0';
        } else {
            current = JSON.stringify(current);
        }
        return previous + (previous !== '' ? ', ' : '') + current;
    }, '') + ']';
};
