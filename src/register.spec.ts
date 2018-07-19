declare function using<T>(arg: T): jasmine.IUsingTestWrapper<T>;
declare namespace using {
    function cases(...arg: Array<any[]>): jasmine.IAnyCasesTestWrapper;
}

describe('register', () => {

    describe('global context', () => {
        beforeEach(() => {
            delete (global as any).self;
            delete (global as any).window;
        });
        afterEach(() => {
            delete (global as any).self;
            delete (global as any).window;
        });
        it('should define using when global context defined', () => {
            mock.reRequire('./register');
            expect(using).toBeFunction();
        });
        it('should define using.cases when global context defined', () => {
            mock.reRequire('./register');
            expect(using.cases).toBeFunction();
        });
        it('should define using when self context defined', () => {
            (global as any).self = global;
            mock.reRequire('./register');
            expect(self.using).toBeFunction();
        });
        it('should define using.cases when self context defined', () => {
            (global as any).self = global;
            mock.reRequire('./register');
            expect(self.using.cases).toBeFunction();
        });
        it('should define using when window context defined', () => {
            (global as any).window = global;
            mock.reRequire('./register');
            expect(window.using).toBeFunction();
        });
        it('should define using.cases when window context defined', () => {
            (global as any).window = global;
            mock.reRequire('./register');
            expect(window.using.cases).toBeFunction();
        });
    });

});
