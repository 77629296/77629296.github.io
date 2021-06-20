import assignValue from '../assignValue';
import castPath from '../castPath';
import isIndex from '../isIndex';
import isObject from '../isObject';
import toKey from '../toKey';

function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  // 转为path数组
  path = castPath(path, object);

  const length = path.length;
  const lastIndex = length - 1;

  let index = -1;
  let nested = object;

  while (nested != null && ++index < length) {
    // 依次取path
    const key = toKey(path[index]);
    let newValue = value;

    // 不是最后一个 取出值
    if (index != lastIndex) {
      // 保存 当前key、vaue
      const objValue = nested[key];
      // 自定义处理
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      // 默认值
      if (newValue === undefined) {
        // 检查是否是对象
        newValue = isObject(objValue)
          ? objValue
          : // 根据后续路径确定类型
          isIndex(path[index + 1])
          ? []
          : {};
      }
    }
    assignValue(nested, key, newValue);
    // 修改nested
    nested = nested[key];
  }
  return object;
}
export default baseSet;
