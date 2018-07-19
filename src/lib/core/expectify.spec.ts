import { expectify } from './expectify';

describe('expectify', () => {

    it('should throw error when argument 0 (args) is not array', () => {
        const arg: any = undefined;
        expect(() => expectify(arg)).toThrow();
    });

    it('should resolve undefined as a string', () => {
        const arg = [undefined];
        const result = expectify(arg);
        expect(result).toEqual('[undefined]');
    });

    it('should resolve function as a special character', () => {
        const arg = [() => 0];
        const result = expectify(arg);
        expect(result).toEqual('[\u0192]');
    });

    it('should resolve any number', () => {
        const arg = [1, Infinity, -Infinity, NaN, -NaN, 0, -0];
        const result = expectify(arg);
        expect(result).toEqual('[1, \u221E, -\u221E, NaN, NaN, 0, -0]');
    });

    it('should resolve any arguments', () => {
        const arg = ['x', 1, /w/i, Symbol(), true, false, null, undefined, {}, [], () => 1, new Date('2018-03-01T20:03:13.999Z')];
        const result = expectify(arg);
        expect(result).toEqual('["x", 1, /w/i, #, true, false, null, undefined, {}, [], \u0192, "2018-03-01T20:03:13.999Z"]');
    });

});
