import { expectify } from './core/expectify';
import { wrap } from './core/wrap';

export function using<T>(arg: T): jasmine.IUsingTestWrapper<T> {
    const runs = [[].slice.call(arguments)];

    if (runs[0].length === 0) {
        throw new Error('Got no arguments for using 1');
    }

    const context = this;

    const wrapper: any = {
        it: wrap(() => runs, context, 'it'),
        xit: wrap(() => runs, context, 'xit'),
        fit: wrap(() => runs, context, 'fit'),
        using: function() {
            const args = [].slice.call(arguments),
                  n = runs[0].length;
            if (args.length === 0) {
                throw new Error(`Got no arguments for using ${runs.length + 1}`);
            }
            if (args.length !== n) {
                throw new Error(`Expecting ${n} argument${n === 1 ? '' : 's'} but got ${args.length} for using ${expectify(args)}`);
            }
            runs.push(args);
            return wrapper;
        }
    };

    return wrapper;
}
