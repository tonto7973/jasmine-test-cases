import { type } from './type';

describe('type', () => {

    it('should return argument type in brackets', () => {
        const result = type(1);
        expect(result).toBe('[Number]');
    });

});
