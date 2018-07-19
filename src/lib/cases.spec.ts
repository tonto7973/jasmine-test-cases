import { cases as $cases } from './cases';

describe('cases', () => {

    const context: any = { };
    const cases: <T, V>(...cases: Array<T | V>) => jasmine.ICasesTestWrapper<T | V> = $cases.bind(context);

    beforeEach(() => {
        context.it = () => new Object();
        context.xit = () => new Object();
        context.fit = () => new Object();
    });

    describe('wrapper', () => {
        it('should return wrapper around it()', () => {
            const test = cases(1);
            expect(test.it).toBeFunction();
        });
        it('should return wrapper around xit()', () => {
            const test = cases(2);
            expect(test.xit).toBeFunction();
        });
        it('should return wrapper around fit()', () => {
            const test = cases(2);
            expect(test.fit).toBeFunction();
        });
        it('should return wrapper with undefined using()', () => {
            const test: any = cases(2);
            expect(test.using).toBeUndefined();
        });
        it('should return wrapper with undefined cases()', () => {
            const test: any = cases(2);
            expect(test.cases).toBeUndefined();
        });
        it('should throw error when no cases specified', () => {
            expect(() => cases()).toThrowError('No cases specified');
        });
        it('should throw error when arguments not specified in case', () => {
            expect(() => cases([1], [])).toThrowError('Got no arguments for case 2');
        });
        it('should throw error when cases has different number of arguments', () => {
            expect(() => cases([1], [2], [true, false])).toThrowError('Expecting 1 argument but got 2 for case [true, false]');
        });
        it('should throw error when cases has different number of arguments', () => {
            expect(() => cases([1, 3, 4], ['a', /\sw/], [55])).toThrowError('Expecting 3 arguments but got 2 for case ["a", /\\sw/]');
        });
    });

    describe('execution', () => {
        it('should execute assertion in it() the number of times matching the number of arguments', () => {
            context.it = (e: string, a: any) => a() && new Object();
            let result = 0;
            cases(['a'], ['b'], ['c'], [1]).it('exp', arg => { result++; });
            expect(result).toBe(4);
        });
        it('should execute assertion in it() with proper arguments', () => {
            context.it = (e: string, a: any) => a() && new Object();
            const result: any[] = [];
            cases(['z'], [4], [[]]).it('e', arg => { result.push(arg); });
            expect(result).toEqual(['z', 4, []]);
        });
        it('should convert arguments to array automatically', () => {
            context.it = (e: string, a: any) => a() && new Object();
            const result: any[] = [];
            cases(5, true, 'a', /x/).it('e', arg => { result.push(arg); });
            expect(result).toEqual([5, true, 'a', /x/]);
        });
        it('should call it() the number of times matching the number of arguments', () => {
            const result: Array<string> = [];
            context.it = (e: string, a: any) => {
                result.push(e);
                return new Object();
            };
            cases([/w/], [null], [undefined]).it('xep', arg => { });
            expect(result.length).toBe(3);
        });
        it('should call xit() the number of times matching the number of arguments', () => {
            const result: Array<string> = [];
            context.xit = (e: string, a: any) => {
                result.push(e);
                return new Object();
            };
            cases([/a/], [new Date()], [Symbol()], [undefined]).xit('eex', arg => { });
            expect(result.length).toBe(4);
        });
        it('should call fit() the number of times matching the number of arguments', () => {
            const result: Array<string> = [];
            context.fit = (e: string, a: any) => {
                result.push(e);
                return new Object();
            };
            cases([{a: true}], [2]).fit('ppe', arg => { });
            expect(result.length).toBe(2);
        });
    });
});
