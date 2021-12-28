
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable
const getOwnPropertySymbols = Object.getOwnPropertySymbols

function getSymbols(object) {
  if (object == null) {
    return []
  }
  object = Object(object)
  return getOwnPropertySymbols(object).filter(symbol => propertyIsEnumerable.call(object, symbol))
}
export default getSymbols;
