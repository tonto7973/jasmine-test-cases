
declare namespace mock {
    type StubFunction = (...params: any[]) => any;
    type Stub = object | StubFunction;

    interface Mock {
        (path: string, mockExport: string | Stub): void;
        stop(path: string): void;
        stopAll(): void;
        reRequire(path: string): any;
    }
}

declare const self: any;
declare const window: any;
declare const mock: mock.Mock;