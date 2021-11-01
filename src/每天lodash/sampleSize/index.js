/**
 * `sampleSize` 和 `sample` 的作用是类似的
 * 不过 `sampleSize` 会随机返回 `array` 中指定数量 `n` 的元素。
 */
function sampleSize(array, n) {
  /**
   * result=[1,2,3,4]
   * rand=0+random*(3-0+1) (0,4) 0-4 rand=2
   * [3,2,1,4]
   *
   * rand=1+random*3-1+1 1,4 rand=1
   * 3214
   *
   * 2,4 rand=2
   * 3214
   *
   * 3,4
   */
  n = n == null ? 1 : n;
  const length = array == null ? 0 : array.length;
  if (!length || n < 1) {
    return [];
  }
  n = n > length ? length : n;
  let index = -1;
  const lastIndex = length - 1;
  const result = copyArray(array);
  while (++index < n) {
    /**
     * 随机数
     * 当前索引+剩余数量随机值
     * 这样能保证不会和之前的索引相同
     */
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    const value = result[rand];
    // 随机值和当前索引值交换
    result[rand] = result[index];
    result[index] = value;
  }
  return slice(result, 0, n);
}

export default sampleSize;
