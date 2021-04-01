import slice from '../slice';

/**
 * var array = [1, 2, 3, 4, 5, 6]
 * chunk(array, 4)
 * 思路：
 * 根据size大小确定结果数组长度
 * 根据size截取原数组
 */

function chunk(array, size = 1) {
  size = Math.max(size, 0);
  if (!length || size < 1) {
    return [];
  }
  let index = 0;
  // 结果索引
  let resIndex = 0;
  // 结果数组 长度为length/size向上取整
  const result = new Array(Math.ceil(length / size));

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size));
  }
  // for循环
  // for(let i = 0; i < chunkSize; i++) {
  //   result[i] = array.splice(0, size)
  // }
  return result;
}

export default chunk;
