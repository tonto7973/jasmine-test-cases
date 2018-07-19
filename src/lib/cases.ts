import { expectify } from './core/expectify';
import { wrap } from './core/wrap';

export function cases<T>(): jasmine.ICasesTestWrapper<T> {
    const runs: Array<any> = [].slice.call(arguments)
        .map((arg: any) => Array.isArray(arg) ? arg : [arg]);

    if (runs.length === 0) {
        throw new Error('No cases specified');
    }

    runs.forEach((args, index) => {
        const n = runs[0].length;
        if (args.length === 0) {
            throw new Error(`Got no arguments for case ${index + 1}`);
        }
        if (args.length !== n) {
            throw new Error(`Expecting ${n} argument${n === 1 ? '' : 's'} but got ${args.length} for case ${expectify(args)}`);
        }
    });

    const context = this;

    const wrapper: any = {
        it: wrap(() => runs, context, 'it'),
        xit: wrap(() => runs, context, 'xit'),
        fit: wrap(() => runs, context, 'fit')
    };

    return wrapper;
}
