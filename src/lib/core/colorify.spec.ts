import * as mock from 'mock-require';

describe('colorify', () => {

    describe('browser', () => {
        let savedProcessBrowser: boolean;
        beforeEach(() => {
            savedProcessBrowser = (process as any).browser;
            (process as any).browser = true;
        });
        afterEach(() => {
            (process as any).browser = savedProcessBrowser;
        });
        it('should not modify string when process is a browser', () => {
            const colorify = mock.reRequire('./colorify').colorify;
            const result = colorify('abc');
            expect(result).toEqual('abc');
        });
    });

    describe('node', () => {
        const fakeMagenta = jasmine.createSpy();
        let savedProcessBrowser: boolean;
        beforeEach(() => {
            savedProcessBrowser = (process as any).browser;
            (process as any).browser = false;
            mock('chalk', {
                magenta: fakeMagenta
            });
        });
        afterEach(() => {
            (process as any).browser = savedProcessBrowser;
            mock.stop('chalk');
        });
        it('chould call chalk.magenta when node detected', () => {
            const colorify = mock.reRequire('./colorify').colorify;
            colorify('abc');
            expect(fakeMagenta).toHaveBeenCalledWith('abc');
        });
    });

});
