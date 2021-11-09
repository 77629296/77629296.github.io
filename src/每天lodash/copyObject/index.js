import assignValue from '../assignValue';
import baseAssignValue from '../baseAssignValue';

function copyObject(source, props, object, customizer) {
  const isNew = !object;
  object || (object = {});

  for (const key of props) {
    let newValue = customizer
      ? // 目标当前值 源值
        customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    // 用于性能优化
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
export default copyObject;
