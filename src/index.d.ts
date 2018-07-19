/// <reference types="jasmine" />

declare namespace jasmine {

    /** Interface for jasmine's parametrized test definition. */
    interface IAnyParametrizedTestDefinition {
        (expectation: string, assertion?: (...args: Array<any | DoneFn>) => void, timeout?: number): void;
    }

    /** Interface for cases' test wrapper. */
    interface IAnyCasesTestWrapper {
        it: IAnyParametrizedTestDefinition;
        xit: IAnyParametrizedTestDefinition;
        fit: IAnyParametrizedTestDefinition;
    }

    /** Interface for jasmine's parametrized test definition. */
    interface IParametrizedTestDefinition<T> {
        (expectation: string, assertion?: (arg: T, done: DoneFn) => void, timeout?: number): void;
    }

    /** Interface for using's test wrapper. */
    interface IUsingTestWrapper<T> {
        it: IParametrizedTestDefinition<T>;
        xit: IParametrizedTestDefinition<T>;
        fit: IParametrizedTestDefinition<T>;
        using<V>(arg: T | V): IUsingTestWrapper<T | V>;
    }

    /** Interface for cases's test wrapper. */
    interface ICasesTestWrapper<T> {
        it: IParametrizedTestDefinition<T>;
        xit: IParametrizedTestDefinition<T>;
        fit: IParametrizedTestDefinition<T>;
    }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare namespace jasmine {

    /** Interface for jasmine's parametrized test definition. */
    interface IParametrizedTestDefinition2<T1, T2> {
        (expectation: string, assertion?: (arg1: T1, arg2: T2, done: DoneFn) => void, timeout?: number): void;
    }

    /** Interface for using's test wrapper. */
    interface IUsingTestWrapper2<T1, T2> {
        it: IParametrizedTestDefinition2<T1, T2>;
        xit: IParametrizedTestDefinition2<T1, T2>;
        fit: IParametrizedTestDefinition2<T1, T2>;
        using<V1, V2>(arg1: T1 | V1, arg2: T2 | V2): IUsingTestWrapper2<T1 | V1, T2 | V2>;
    }

}

declare namespace jasmine {

    /** Interface for jasmine's parametrized test definition. */
    interface IParametrizedTestDefinition3<T1, T2, T3> {
        (expectation: string, assertion?: (arg1: T1, arg2: T2, arg3: T3, done: DoneFn) => void, timeout?: number): void;
    }

    /** Interface for using's test wrapper. */
    interface IUsingTestWrapper3<T1, T2, T3> {
        it: IParametrizedTestDefinition3<T1, T2, T3>;
        xit: IParametrizedTestDefinition3<T1, T2, T3>;
        fit: IParametrizedTestDefinition3<T1, T2, T3>;
        using<V1, V2, V3>(arg1: T1 | V1, arg2: T2 | V2, arg3: T3 | V3): IUsingTestWrapper3<T1 | V1, T2 | V2, T3 | V3>;
    }

}

declare namespace jasmine {

    /** Interface for jasmine's parametrized test definition. */
    interface IParametrizedTestDefinition4<T1, T2, T3, T4> {
        (expectation: string, assertion?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, done: DoneFn) => void, timeout?: number): void;
    }

    /** Interface for using's test wrapper. */
    interface IUsingTestWrapper4<T1, T2, T3, T4> {
        it: IParametrizedTestDefinition4<T1, T2, T3, T4>;
        xit: IParametrizedTestDefinition4<T1, T2, T3, T4>;
        fit: IParametrizedTestDefinition4<T1, T2, T3, T4>;
        using<V1, V2, V3, V4>(arg1: T1 | V1, arg2: T2 | V2, arg3: T3 | V3, arg4: T4 | V4): IUsingTestWrapper4<T1 | V1, T2 | V2, T3 | V3, T4 | V4>;
    }

}

declare namespace jasmine {

    /** Interface for jasmine's parametrized test definition. */
    interface IParametrizedTestDefinition5<T1, T2, T3, T4, T5> {
        (expectation: string, assertion?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, done: DoneFn) => void, timeout?: number): void;
    }

    /** Interface for using's test wrapper. */
    interface IUsingTestWrapper5<T1, T2, T3, T4, T5> {
        it: IParametrizedTestDefinition5<T1, T2, T3, T4, T5>;
        xit: IParametrizedTestDefinition5<T1, T2, T3, T4, T5>;
        fit: IParametrizedTestDefinition5<T1, T2, T3, T4, T5>;
        using<V1, V2, V3, V4, V5>(arg1: T1 | V1, arg2: T2 | V2, arg3: T3 | V3, arg4: T4 | V4, arg5: T5 | V5): IUsingTestWrapper5<T1 | V1, T2 | V2, T3 | V3, T4 | V4, T5 | V5>;
    }

}

declare namespace jasmine {

    /** Interface for jasmine's parametrized test definition. */
    interface IParametrizedTestDefinition6<T1, T2, T3, T4, T5, T6> {
        (expectation: string, assertion?: ( arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, done: DoneFn) => void, timeout?: number): void;
    }

    /** Interface for using's test wrapper. */
    interface IUsingTestWrapper6<T1, T2, T3, T4, T5, T6> {
        it: IParametrizedTestDefinition6<T1, T2, T3, T4, T5, T6>;
        xit: IParametrizedTestDefinition6<T1, T2, T3, T4, T5, T6>;
        fit: IParametrizedTestDefinition6<T1, T2, T3, T4, T5, T6>;
        using<V1, V2, V3, V4, V5, V6>(arg1: T1 | V1, arg2: T2 | V2, arg3: T3 | V3, arg4: T4 | V4, arg5: T5 | V5, arg6: T6 | V6): IUsingTestWrapper6<T1 | V1, T2 | V2, T3 | V3, T4 | V4, T5 | V5, T6 | V6>;
    }

}

declare namespace jasmine {

    /** Interface for jasmine's parametrized test definition. */
    interface IParametrizedTestDefinition7<T1, T2, T3, T4, T5, T6, T7> {
        (expectation: string, assertion?: ( arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, done: DoneFn) => void, timeout?: number): void;
    }

    /** Interface for using's test wrapper. */
    interface IUsingTestWrapper7<T1, T2, T3, T4, T5, T6, T7> {
        it: IParametrizedTestDefinition7<T1, T2, T3, T4, T5, T6, T7>;
        xit: IParametrizedTestDefinition7<T1, T2, T3, T4, T5, T6, T7>;
        fit: IParametrizedTestDefinition7<T1, T2, T3, T4, T5, T6, T7>;
        using<V1, V2, V3, V4, V5, V6, V7>(arg1: T1 | V1, arg2: T2 | V2, arg3: T3 | V3, arg4: T4 | V4, arg5: T5 | V5, arg6: T6 | V6, arg7: T7 | V7): IUsingTestWrapper7<T1 | V1, T2 | V2, T3 | V3, T4 | V4, T5 | V5, T6 | V6, T7 | V7>;
    }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

