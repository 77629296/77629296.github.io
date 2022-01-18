import isPrototype from '../isPrototype';

// 初始化空对象 如果存在原型链则继承
function initCloneObject(object) {
  return typeof (object.constructor === 'function' && !isPrototype(object)) ? Object.create(Object.getPrototypeOf(object)) : {}
}
export default initCloneObject;
