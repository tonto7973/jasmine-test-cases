describe('index', () => {

    describe('export', () => {
        const index = require('./index');
        it('should export default as a function', () => {
            expect(index).toBeFunction();
        });
        it('should export default.cases as a function', () => {
            expect(index.cases).toBeFunction();
        });
        it('should export using as a function', () => {
            expect(index.using).toBeFunction();
        });
        it('should export using.cases as a function', () => {
            expect(index.using.cases).toBeFunction();
        });
    });

    describe('global context', () => {
        beforeEach(() => {
            delete (global as any).self;
            delete (global as any).window;
        });
        afterEach(() => {
            delete (global as any).self;
            delete (global as any).window;
        });
        it('should use self as context when provided', () => {
            const context = {
                it: jasmine.createSpy('it', () => {}),
                xit: () => {},
                fit: () => {}
            };
            (global as any).self = context;
            const index = mock.reRequire('./index');
            const using = index.using;
            using(1).it('a');
            expect(context.it).toHaveBeenCalled();
        });
        it('should use window as context when provided', () => {
            const context = {
                xit: jasmine.createSpy('it', () => {}),
                it: () => {},
                fit: () => {}
            };
            (global as any).window = context;
            const index = mock.reRequire('./index');
            const using = index.using;
            using(2).xit('b');
            expect(context.xit).toHaveBeenCalled();
        });
    });
});
