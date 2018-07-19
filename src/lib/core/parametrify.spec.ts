import { parametrify } from './parametrify';

describe('parametrify', () => {

    it('should throw error when argument 0 (getArgs) is not function', () => {
        const getArgs: any = undefined;
        const original: any = () => 0;
        expect(() => parametrify(getArgs, original)).toThrow();
    });

    it('should throw error when argument 1 (original) is not function', () => {
        const getArgs = () => [];
        const original: any = 1;
        expect(() => parametrify(getArgs, original)).toThrow();
    });

    it('should return function', () => {
        const getArgs = () => [];
        const original: any = () => 0;
        const pit = parametrify(getArgs, original);
        expect(pit).toBeFunction();
    });

    describe('returned function', () => {
        it('should throw when argument 0 (getArgs) does not return array', () => {
            const getArgs: any = () => 1;
            const original: any = () => 0;
            const pit = parametrify(getArgs, original);
            expect(() => pit('foo')).toThrow();
        });
        it('should return undefined when argument 0 (getArgs) is empty', () => {
            const getArgs: any = () => [];
            const original: any = () => 0;
            const pit = parametrify(getArgs, original);
            const result = pit('foo');
            expect(result).toBe(undefined);
        });
        it('should return the first runnable', () => {
            class DummyRunnable {
                constructor(expectation: string, assertion?: any) { }
            }
            const testRunnable = new DummyRunnable('');
            const getArgs: any = () => [['a']];
            const original: any = () => testRunnable;
            const pit = parametrify(getArgs, original);
            const result = pit('foo');
            expect(result).toBe(testRunnable);
        });
        it('should call original test definition with modified expectation', () => {
            class DummyRunnable {
                constructor(public expectation: string, public assertion?: any) { }
            }
            const getArgs: any = () => [[0]];
            const original: any = (expectation: string, assertion?: any) => new DummyRunnable(expectation, assertion);
            const spy = jasmine.createSpy('runnable', original);
            const pit = parametrify(getArgs, spy);
            pit('message');
            expect(spy).toHaveBeenCalled();
        });
        it('should call original test definition with unmodified assertion when not a function', () => {
            class DummyRunnable {
                constructor(public expectation: string, public assertion?: any) { }
            }
            const getArgs: any = () => [[true]];
            const original: any = (expectation: string, assertion?: any) => new DummyRunnable(expectation, assertion);
            const spy = jasmine.createSpy('runnable', original);
            const pit = parametrify(getArgs, spy);
            pit('w', 32 as any);
            expect(spy).toHaveBeenCalledWith(jasmine.any(String), 32 as any, undefined);
        });
        it('should call original test definition with parametrized assertion', () => {
            class DummyRunnable {
                constructor(public expectation: string, public assertion?: any) { }
            }
            const getArgs: any = () => [[null], [false], [0]];
            const original: any = (expectation: string, assertion?: any) => {
                assertion();
                return new DummyRunnable(expectation, assertion);
            };
            const result: any[] = [];
            const parametrizedAssertion = (arg: any) => {
                result.push(arg);
            };
            const pit = parametrify(getArgs, original);
            pit('w', parametrizedAssertion as any);
            expect(result).toEqual([null, false, 0]);
        });
        it('should call original test definition with parametrized assertion and done function', () => {
            class DummyRunnable {
                constructor(public expectation: string, public assertion?: any) { }
            }
            const getArgs: any = () => [[null], [false], [0], [undefined]];
            const doneFn = jasmine.createSpy();
            const original: any = (expectation: string, assertion?: any) => {
                assertion(doneFn);
                return new DummyRunnable(expectation, assertion);
            };
            const parametrizedAssertion = (arg: any, done: any) => {
                done();
            };
            const pit = parametrify(getArgs, original);
            pit('w', parametrizedAssertion as any);
            expect(doneFn).toHaveBeenCalledTimes(4);
        });
    });

});
