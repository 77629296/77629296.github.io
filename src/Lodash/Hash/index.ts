/**
 * var cache = new Hash([['test1', 1], ['test2', 2]])
 * cache.get('test1') // 1
 */

// 区分缓存值也是undefined的情况
const HASH_UNDEFINED = '__lodash_hash_undefined__'

class Hash {
  constructor(entires) {
    let index = -1
    const length = entires == null ? 0 : entires.length

    // 利用clear初始化属性
    this.clear()
    while (++index < length) {
      const entry = entires[index]
      this.set(entry[0], entry[1])
    }
  }
  clear() {
    // this.__data__ = {} ?
    // Object.create(null) 创建没有原型的对象
    this.__data__ = Object.create(null)
    this.size = 0
  }
  delete(key) {
    const result = this.has(key) && delete this.__data__[key]
    this.size -= result ? 1 : 0
    return result
  }
  get(key) {
    const data = this.__data__
    const result = data[key]
    return result === HASH_UNDEFINED ? undefined : result
  }
  has(key) {
    const data = this.__data__
    return data[key] !== undefined
  }
  set(key, value) {
    const data = this.__data__
    this.size += this.has(key) ? 0 : 1
    data[key] = value === undefined ? HASH_UNDEFINED : value

    // 支持链式操作
    return this
  }
}

export default Hash