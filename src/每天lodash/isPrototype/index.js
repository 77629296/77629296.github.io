/**
 * 判断原型对象
 * 函数.prototype === 原型对象
 * 原型对象.constructor === 函数
 * => 原型对象.constructor.prototype === 原型对象
 */
const objectProto = Object.prototype
function isPrototype(value) {
  const Ctr = value && value.constructor
  const proto = (typeof Ctr === 'function' && Ctr.prototype) || objectProto
  return value === proto
}
export default isPrototype;
