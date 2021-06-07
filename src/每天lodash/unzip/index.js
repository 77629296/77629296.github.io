import filter from '../filter';
import map from '../map';
import baseProperty from '../baseProperty';
import isArrayLikeObject from '../isArrayLikeObject';

function unzip(array) {
  // 处理空值
  if (!(array != null && array.length)) {
    return [];
  }
  // 过滤非数组元素 计算新数组长度
  let length = 0;
  array = filter(array, group => {
    if (isArrayLikeObject(group)) {
      length = Math.max(group.length, length);
      return true;
    }
  });
  let index = -1;
  const result = new Array(length);
  while (++index < length) {
    // 使用map获取符合条件的数组
    result[index] = map(array, baseProperty(index));
  }
  return result;
}

export default unzip;
