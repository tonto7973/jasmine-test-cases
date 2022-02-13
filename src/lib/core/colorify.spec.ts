import { enableColors, colorify } from './colorify';

describe('colorify', () => {
    let storedProcess: any;

    beforeEach(() => {
        storedProcess = (global as any).process;
    });

    afterEach(() => {
        (global as any).process = storedProcess;
    });

    it('should colorify text when colors enabled', () => {
        const testText = 'abc';
        enableColors(true);

        const result = colorify(testText);

        expect(result).toBe('\u001b[35m' + testText + '\u001b[39m');
    });

    it('should colorify text when process defined', () => {
        const testText = 'def';
        (global as any).process = {};
        enableColors(undefined);

        const result = colorify(testText);

        expect(result).toBe('\u001b[35m' + testText + '\u001b[39m');
    });

    it('should not colorify text when colors disabled', () => {
        const testText = 'abc';
        enableColors(false);

        const result = colorify(testText);

        expect(result).toBe(testText);
    });

    it('should not colorify text when process not defined', () => {
        const testText = 'xyz';
        delete (global as any).process;
        enableColors(false);

        const result = colorify(testText);

        expect(result).toBe(testText);
    });
});
