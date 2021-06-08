import baseAssignValue from '../baseAssignValue';
import eq from '../eq';

const hasOwnProperty = Object.prototype.hasOwnProperty;

function assignValue(object, key, value) {
  const objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value))) {
    // 从object原型链取到值 且相等
    if (value !== 0 || 1 / value === 1 / objValue) {
      // 非正负值 设置
      baseAssignValue(object, key, value);
    }
  } else if (value === undefined && !(key in object)) {
    // value有值 且object 或原型链上都没有这个值
    baseAssignValue(object, key, value);
  }
}

export default assignValue;
