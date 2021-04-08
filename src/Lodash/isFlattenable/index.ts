import isArguments from '../isArguments';
const spreadableSymbol = Symbol.isConcatSpreadable;

function isFlattenable(value) {
  return (
    Array.isArray(value) ||
    isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol])
  );
}
export default isFlattenable;
