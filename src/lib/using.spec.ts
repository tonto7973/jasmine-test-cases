import { using as $using } from './using';

describe('using', () => {

    const context: any = { };
    const using: <T>(arg: T) => jasmine.IUsingTestWrapper<T> = $using.bind(context);

    beforeEach(() => {
        context.it = () => new Object();
        context.xit = () => new Object();
        context.fit = () => new Object();
    });

    describe('wrapper', () => {
        it('should return wrapper around it()', () => {
            const test = using(1);
            expect(test.it).toBeFunction();
        });
        it('should return wrapper around xit()', () => {
            const test = using(2);
            expect(test.xit).toBeFunction('function');
        });
        it('should return wrapper around fit()', () => {
            const test = using(2);
            expect(test.fit).toBeFunction('function');
        });
        it('should return wrapper with nested using()', () => {
            const test = using(2);
            expect(test.using).toBeFunction('function');
        });
        it('should return the same nested wrapper', () => {
            const test = using(2);
            expect(test.using(7)).toBe(test);
        });
        it('should throw error when using has no arguments', () => {
            const test = (using as any);
            expect(() => test()).toThrowError('Got no arguments for using 1');
        });
        it('should throw error when nested using has no arguments', () => {
            const test = using(1) as any;
            expect(() => test.using(3).using()).toThrowError('Got no arguments for using 3');
        });
        it('should throw error when nested using has different number of arguments', () => {
            const test = using(1) as any;
            expect(() => test.using(true, false)).toThrowError('Expecting 1 argument but got 2 for using [true, false]');
        });
        it('should throw error when nested using has different number of arguments', () => {
            const test = (using as any)(1, 2);
            expect(() => test.using(7)).toThrowError('Expecting 2 arguments but got 1 for using [7]');
        });
    });

    describe('execution', () => {
        it('should execute assertion in it() the number of times using is declared', () => {
            context.it = (e: string, a: any) => a() && new Object();
            let result = 0;
            using('a').using('b').using('c').using(1).it('exp', arg => { result++; });
            expect(result).toBe(4);
        });
        it('should execute assertion in it() with proper arguments', () => {
            context.it = (e: string, a: any) => a() && new Object();
            const result: any[] = [];
            using('z').using(4).using([]).it('e', arg => { result.push(arg); });
            expect(result).toEqual(['z', 4, []]);
        });
        it('should execute assertion in it() with done() as last argument', () => {
            const spy = jasmine.createSpy();
            context.it = (e: string, a: any) => a(spy) && new Object();
            (using as any)(true, 1).using(false, 2).it('e', (a1: any, a2: any, done: any) => done());
            expect(spy).toHaveBeenCalledTimes(2);
        });
        it('should call it() the number of times using is declared', () => {
            const result: Array<string> = [];
            context.it = (e: string, a: any) => {
                result.push(e);
                return new Object();
            };
            using(/w/).using(null).using(undefined).it('pex', arg => { });
            expect(result.length).toBe(3);
        });
        it('should call xit() the number of times using is declared', () => {
            const result: Array<string> = [];
            context.xit = (e: string, a: any) => {
                result.push(e);
                return new Object();
            };
            using(/a/).using(new Date()).using(3).using(Symbol()).using(undefined).xit('exp', arg => { });
            expect(result.length).toBe(5);
        });
        it('should call fit() the number of times using is declared', () => {
            const result: Array<string> = [];
            context.fit = (e: string, a: any) => {
                result.push(e);
            };
            using(/1/).using(3).using(null).using(undefined).fit('e', a => { });
            expect(result.length).toBe(4);
        });
    });

});
