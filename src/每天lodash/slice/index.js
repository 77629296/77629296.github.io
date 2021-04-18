function slice(array, start, end) {
  let length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  // 默认值
  start = start == null ? 0 : start;
  end = end == null ? length : end;

  /**
   * 处理负值情况
   * slice([1, 2, 3], -5) start=0
   * 如果绝对值大于数组长度，从0开始
   *
   * slice([1, 2, 3], -1) start=2
   * 如果绝对值小于等于数组长度，和数组长度相加
   */
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }

  // end最大为数组的长度
  end = end > length ? length : end;

  // end负值大于数组长度后面有控制 会和start比较
  if (end < 0) {
    end += length;
  }

  // 新数组长度 正常为end-start >>> 是取整操作
  length = start > end ? 0 : (end - start) >>> 0;
  start >>>= 0;

  /**
   * 从-1开始 因为while循环中为++index 此时index=0
   * 能不能改为index=0 循环使用index++? 不行，因为index++后，index=1 result直接从1开始赋值了。。
   */
  let index = -1;
  const result = new Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }

  return result;
}

export default slice;
