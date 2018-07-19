import { using } from './lib/using';
import { cases } from './lib/cases';

export { };

const context =
    typeof self !== 'undefined' ? self :
    typeof window !== 'undefined' ? window :
    typeof global !== 'undefined' ? global : /* istanbul ignore next */
    { };

context.using = using.bind(context);
context.using.cases = cases.bind(context);
