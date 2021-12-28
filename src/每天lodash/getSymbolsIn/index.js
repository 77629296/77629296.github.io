import getSymbols from '../getSymbols';

function getSymbolsIn(object) {
  const result = []
  while(object) {
    result.push(...getSymbols(object))
    object = Object.getPrototypeOf(Object(object))
  }
}
export default getSymbolsIn;
