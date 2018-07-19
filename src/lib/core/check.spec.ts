import { Check } from './check';

describe('Check', () => {

    describe('isArray', () => {
        it('should throw exception when argument is Null', () => {
            expect(() => Check.isArray(null)).toThrow(new Error('Expected an [Array] but [Null] given'));
        });
        it('should throw exception when argument is Undefined', () => {
            expect(() => Check.isArray(undefined)).toThrow(new Error('Expected an [Array] but [Undefined] given'));
        });
        it('should throw exception when argument is Date', () => {
            expect(() => Check.isArray(new Date())).toThrow(new Error('Expected an [Array] but [Date] given'));
        });
        it('should throw exception when argument is RegExp', () => {
            expect(() => Check.isArray(/a/)).toThrow(new Error('Expected an [Array] but [RegExp] given'));
        });
        it('should throw exception when argument is Symbol', () => {
            expect(() => Check.isArray(Symbol())).toThrow(new Error('Expected an [Array] but [Symbol] given'));
        });
        it('should throw exception when argument is Number', () => {
            expect(() => Check.isArray(1)).toThrow(new Error('Expected an [Array] but [Number] given'));
        });
        it('should throw exception when argument is Boolean', () => {
            expect(() => Check.isArray(true)).toThrow(new Error('Expected an [Array] but [Boolean] given'));
        });
        it('should throw exception when argument is String', () => {
            expect(() => Check.isArray('s')).toThrow(new Error('Expected an [Array] but [String] given'));
        });
        it('should throw exception when argument is Object', () => {
            expect(() => Check.isArray({})).toThrow(new Error('Expected an [Array] but [Object] given'));
        });
        it('should throw exception when argument is Function', () => {
            expect(() => Check.isArray(() => 0)).toThrow(new Error('Expected an [Array] but [Function] given'));
        });
        it('should throw exception with custom error message when given', () => {
            expect(() => Check.isArray(1, 'custom error')).toThrow(new Error('custom error'));
        });
        it('should not throw exception when argument is Array', () => {
            expect(() => Check.isArray([])).not.toThrow();
        });
        it('should return input argument when it is Array', () => {
            const input = [1];
            const result = Check.isArray(input);
            expect(result).toEqual(input);
        });
    });

    describe('isFunction', () => {
        it('should throw exception when argument is Null', () => {
            expect(() => Check.isFunction(null)).toThrow(new Error('Expected a [Function] but [Null] given'));
        });
        it('should throw exception when argument is Undefined', () => {
            expect(() => Check.isFunction(undefined)).toThrow(new Error('Expected a [Function] but [Undefined] given'));
        });
        it('should throw exception when argument is Date', () => {
            expect(() => Check.isFunction(new Date())).toThrow(new Error('Expected a [Function] but [Date] given'));
        });
        it('should throw exception when argument is RegExp', () => {
            expect(() => Check.isFunction(/a/)).toThrow(new Error('Expected a [Function] but [RegExp] given'));
        });
        it('should throw exception when argument is Symbol', () => {
            expect(() => Check.isFunction(Symbol())).toThrow(new Error('Expected a [Function] but [Symbol] given'));
        });
        it('should throw exception when argument is Number', () => {
            expect(() => Check.isFunction(1)).toThrow(new Error('Expected a [Function] but [Number] given'));
        });
        it('should throw exception when argument is Boolean', () => {
            expect(() => Check.isFunction(true)).toThrow(new Error('Expected a [Function] but [Boolean] given'));
        });
        it('should throw exception when argument is String', () => {
            expect(() => Check.isFunction('s')).toThrow(new Error('Expected a [Function] but [String] given'));
        });
        it('should throw exception when argument is Object', () => {
            expect(() => Check.isFunction({})).toThrow(new Error('Expected a [Function] but [Object] given'));
        });
        it('should throw exception when argument is Array', () => {
            expect(() => Check.isFunction([])).toThrow(new Error('Expected a [Function] but [Array] given'));
        });
        it('should throw exception with custom error message when given', () => {
            expect(() => Check.isArray(1, 'my error')).toThrow(new Error('my error'));
        });
        it('should not throw exception when argument is Function', () => {
            expect(() => Check.isFunction(() => 0)).not.toThrow();
        });
        it('should return input argument when it is Function', () => {
            const input = () => 0;
            const result = Check.isFunction(input);
            expect(result).toEqual(input);
        });
    });

});
