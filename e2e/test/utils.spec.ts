import { Utils } from './utils';
import { using } from './../../src/index';

describe('utils', () => {

    describe('sample tests for using()', () => {
        using(null).
        using(undefined).
            it('should return true when value is null or undefined', value => {
                const result = Utils.isEmpty(value);
                expect(result).toBe(true);
            });
    });

    describe('sample tests for cases()', () => {
        using.cases(null, undefined).
            it('should return true when value is null or undefined', value => {
                const result = Utils.isEmpty(value);
                expect(result).toBe(true);
            });
    });

    describe('using smoke tests', () => {
        using(null).
        using(undefined).
            it('should check if argument is null or undefined', arg => {
                expect(arg === null || arg === undefined).toBe(true);
            });
        // done
        using(1).
        using(2).
        using(3).
            it('should run done as the last argument', (arg, done) => {
                arg = Math.random();
                expect(done).toBeFunction();
                done();
            });
        // pending
        using('blue').
            it('should show pending placeholder');
        using('one').
        using(false).
            it('should skip when pending() used', p => {
                pending(`Pending using with parameter ${p}`);
            });
        // xit
        using(1).
        using('a').
            xit('should skip when using.xit used', p => {
                expect(p).toBe(false as any);
            });
        // timeout
        using(80).
        using(40).
            it('should expose timeout in async function', (tm, done) => {
                setTimeout(() => {
                    expect(done).toBeFunction();
                    done();
                }, tm);
            }, 160);
        // multiple arguments
        using(10, 20, 30).
        using(true, /w/, Infinity).
        using(false, /a/, -Infinity).
        using(null, /z/, -NaN).
            it('should resolve last argument as done function', (arg1, arg2, arg3, done) => {
                expect('' + arg1 + arg2 + arg3).toBeString();
                done();
            });
    });

    describe('cases smoke tests', () => {
        using.cases(null, undefined).
            it('should check if argument is null or undefined', arg => {
                expect(arg).not.toBe(true as any);
            });
        // done
        using.cases(1, 2, 3).
            it('should run done as the last argument', (arg, done) => {
                arg = Math.random();
                expect(done).toBeFunction();
                done();
            });
        // pending
        using.cases('blue').
            it('should show pending placeholder');
        using.cases(null, undefined).
            it('should skip when it.skip used', p => {
                pending(`Pending using.cases with parameter ${p}`);
            });
        // xit
        using.cases(1, 'a').
            xit('should skip when using.xit used', p => {
                expect(p).toBe(false as any);
            });
        // timeout
        using.cases(80, 40).
            it('should expose timeout in async function', (tm, done) => {
                setTimeout(() => {
                    expect(done).toBeFunction();
                    done();
                }, tm);
            }, 160);
        // multiple arguments
        using.cases(
            [10, 20, 30],
            [true, /w/, Infinity],
            [false, /a/, {a: 1}],
            [null, /z/, -NaN]
        ).
            it('should resolve last argument as done function', (arg1, arg2, arg3, done) => {
                expect('' + arg1 + arg2 + arg3).toBeString();
                done();
            });
    });

});
