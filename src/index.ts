import { using as using$ } from './lib/using';
import { cases as cases$ } from './lib/cases';

declare const module: any;

const context =
    typeof self !== 'undefined' ? self :
    typeof window !== 'undefined' ? window :
    typeof global !== 'undefined' ? global : /* istanbul ignore next */
    { };

const default$ = (() => {
    const result = using$.bind(context);
    result.cases = cases$.bind(context);
    result.using = result;
    return result;
})();

module.exports = default$;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export declare function using<T>(arg: T): jasmine.IUsingTestWrapper<T>;
export declare function using<T1, T2>(arg1: T1, arg2: T2): jasmine.IUsingTestWrapper2<T1, T2>;
export declare function using<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): jasmine.IUsingTestWrapper3<T1, T2, T3>;
export declare function using<T1, T2, T3, T4>(arg1: T1, arg2: T2, arg3: T3, arg4: T4): jasmine.IUsingTestWrapper4<T1, T2, T3, T4>;
export declare function using<T1, T2, T3, T4, T5>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5):
    jasmine.IUsingTestWrapper5<T1, T2, T3, T4, T5>;
export declare function using<T1, T2, T3, T4, T5, T6>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6):
    jasmine.IUsingTestWrapper6<T1, T2, T3, T4, T5, T6>;
export declare function using<T1, T2, T3, T4, T5, T6, T7>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7):
    jasmine.IUsingTestWrapper7<T1, T2, T3, T4, T5, T6, T7>;
export declare function using(...arg: any[]): jasmine.IUsingTestWrapper<any>;
export declare namespace using {
    type NotArray<T> = T & Exclude<T, any[]>;
    function cases(...arg: Array<any[]>): jasmine.IAnyCasesTestWrapper;
    function cases<T>(arg: NotArray<T>): jasmine.ICasesTestWrapper<T>;
    function cases<T1, T2>(arg1: NotArray<T1>, arg2: NotArray<T2>): jasmine.ICasesTestWrapper<T1 | T2>;
    function cases<T1, T2, T3>(arg1: NotArray<T1>, arg2: NotArray<T2>, arg3: NotArray<T3>): jasmine.ICasesTestWrapper<T1 | T2 | T3>;
    function cases<T1, T2, T3, T4>(arg1: NotArray<T1>, arg2: NotArray<T2>, arg3: NotArray<T3>, arg4: NotArray<T4>):
        jasmine.ICasesTestWrapper<T1 | T2 | T3 | T4>;
    function cases<T1, T2, T3, T4, T5>(arg1: NotArray<T1>, arg2: NotArray<T2>, arg3: NotArray<T3>, arg4: NotArray<T4>, arg5: NotArray<T5>):
        jasmine.ICasesTestWrapper<T1 | T2 | T3 | T4 | T5>;
    function cases<T1, T2, T3, T4, T5, T6>(arg1: NotArray<T1>, arg2: NotArray<T2>, arg3: NotArray<T3>, arg4: NotArray<T4>,
            arg5: NotArray<T5>, arg6: NotArray<T6>): jasmine.ICasesTestWrapper<T1 | T2 | T3 | T4 | T5 | T6>;
    function cases<T1, T2, T3, T4, T5, T6, T7>(arg1: NotArray<T1>, arg2: NotArray<T2>, arg3: NotArray<T3>, arg4: NotArray<T4>,
            arg5: NotArray<T5>, arg6: NotArray<T6>, arg7: NotArray<T7>): jasmine.ICasesTestWrapper<T1 | T2 | T3 | T4 | T5 | T6 | T7>;
}
