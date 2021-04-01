import eq from '../eq'
/**
 * var array = [['key1', 1], ['key2', 2]]
 * assocIndexOf(array, 'key1') // 0
 * assocIndexOf(array, 'key2') // 1
 */
function assocIndexOf(array, key) {
  let { length } = array
  /**
   * length--与--length
   * 比如length=2
   * length-- length
   * 2  1
   * 1  0
   *
   * 如果换成--length length
   * 1  1
   * 0  0 // 循环已结束 漏掉一次循环
   */

  while (length--) {
    // 复用eq
    if (eq(array[length][0], key)) {
      return length
    }
  }
  return -1
}

export default assocIndexOf