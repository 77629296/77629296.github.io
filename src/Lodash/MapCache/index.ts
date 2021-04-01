import Hash from '../Hash'
import ListCache from '../ListCache'
/**
 * new MapCache([
 *   ['key', 'value'],
 *   [{key: 'An Object Key'}, 1],
 *   [Symbol(),2]
 * ])
 * 返回结果：{
 *   size: 3,
 *   __data__: {Ï
 *     string: {...},
 *     hash: {...},
 *     map: {...}
 *   }
 * }
 */

// 是否可作为对象的key
function isKeyable(value) {
  const type = typeof value
  return type == 'string' ||
    type == 'number' ||
    type == 'symbol' ||
    type == 'boolean'
    ? value !== '__proto__'
    : value === null
}

function getMapData({ __data__ }, key) {
  const data = __data__
  // 根据是否可用作key 区分使用map
  return isKeyable(key)
    ? // 可用作key时 string单独分为1类
      data[typeof key == 'string' ? 'string' : 'hash']
    : data.map
}

class MapCache {
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
    this.size = 0
    this.__data__ = {
      hash: new Hash(),
      map: new (Map || ListCache)(),
      string: new Hash(),
    }
  }

  delete(key) {
    const result = getMapData(this, key)['delete'](key)
    this.size -= result ? 1 : 0
    return result
  }

  get(key) {
    return getMapData(this, key).get(key)
  }

  has(key) {
    return getMapData(this, key).has(key)
  }

  set(key, value) {
    const data = getMapData(this, key)
    const size = data.size

    data.set(key, value)
    this.size += data.size == size ? 0 : 1
    return this
  }
}

export default MapCache