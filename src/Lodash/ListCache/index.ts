import assocIndexOf from '../assocIndexOf'
/**
 * new ListCache([
 *   [{key: 'object key'}: 'object value'],
 *   [['array key']: 'array value'],
 *   [function() {}, 'function value']
 * ])
 */
class ListCache {
  // 实现过程和Hash类似
  constructor(entries) {
    let index = -1
    const length = entries == null ? 0 : entries.length

    this.clear()
    while (++index < length) {
      const entry = entries[index]
      this.set(entry[0], entry[1])
    }
  }

  clear() {
    this.__data__ = []
    this.size = 0
  }

  delete(key) {
    const data = this.__data__
    // 参考方法6 查找对应key在二维数组中的索引 行为类似indexOf
    const index = assocIndexOf(data, key)

    if (index < 0) {
      return false
    }
    const lastIndex = data.length - 1

    // 最后一个利用数组的pop方法 为什么特殊处理 据说是性能略高 666
    if (index == lastIndex) {
      data.pop()
    } else {
      data.splice(index, 1)
    }
    --this.size
    return true
  }

  get(key) {
    const data = this.__data__
    const index = assocIndexOf(data, key)
    return index < 0 ? undefined : data[index][1]
  }

  has(key) {
    return assocIndexOf(this.__data__, key) > -1
  }

  set(key, value) {
    const data = this.__data__
    const index = assocIndexOf(data, key)

    // 不存在则推入 否则更新
    if (index < 0) {
      ++this.size
      data.push([key, value])
    } else {
      data[index][1] = value
    }
    return this
  }
}

export default ListCache