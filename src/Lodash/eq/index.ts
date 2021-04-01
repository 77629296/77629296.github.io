/**
 * eq(1, 1) true
 * eq(1, '1') false
 * eq(NaN, NaN) true
 */
 function eq(value, other) {
  /**
   * value === other 严格相等
   * 可以用Object.is()吗？
   * 不可以 因为Object.is(+0, -0)返回false
   */

  /**
   * value !== value && other !== other 处理NaN的情况
   * 可以用isNaN()吗？
   * 不可以 因为isNaN(value) value会先转为Number再比较 value=undefined或者非空字符串都为trur
   *
   * 可以用Number.isNaN()吗
   * 可以 es6在Number对象上扩展了isNaN方法，只有是NaN才返回true
   */

  // return value === other || (isNaN(value) && isNaN(other))
  return value === other || (value !== value && other !== other)
}

export default eq