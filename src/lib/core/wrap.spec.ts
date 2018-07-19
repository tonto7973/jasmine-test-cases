import { wrap } from './wrap';

describe('wrap', () => {

    it('should throw error when context is undefined', () => {
        const getRuns = () => [];
        const context = undefined;
        expect(() => wrap(getRuns, context, 'it')).toThrow(new Error('Context is undefined'));
    });

    it('should throw error when context is null', () => {
        const getRuns = () => [];
        const context = null;
        expect(() => wrap(getRuns, context, 'it')).toThrow(new Error('Context is undefined'));
    });

    it('should throw error when context.it() not defined', () => {
        const getRuns = () => [];
        const context = false;
        expect(() => wrap(getRuns, context, 'it')).toThrow(new Error(`Expected context.it() to be a [Function] but [Undefined] found`));
    });

    it('should throw error when context.it() is not function', () => {
        const getRuns = () => [];
        const context = {
            it: 1
        };
        expect(() => wrap(getRuns, context, 'it')).toThrow(new Error(`Expected context.it() to be a [Function] but [Number] found`));
    });

    it('should return parametrized context.it() as function', () => {
        const getRuns = () => [];
        const context = {
            it: () => new Object()
        };
        const pit = wrap(getRuns, context, 'it');
        expect(pit).toBeFunction();
    });

    it('should return parametrized context.it() using parametrify (sanity check)', () => {
        const result: { expectation?: string, arg?: any } = { };
        const getRuns = () => [[1]];
        const context = {
            it: (expectation: string, assertion?: any) => {
                result.expectation = expectation.replace(/\x1b\[[0-9]+m/g, '');
                assertion();
                return new Object();
            }
        };
        const ast = (arg: any) => { result.arg = arg; };
        const pit = wrap(getRuns, context, 'it');
        pit('ecspcs', ast);
        expect(result).toEqual({
            expectation: 'ecspcs [1]',
            arg: 1
        });
    });

});
