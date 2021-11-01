/**
 * `filterObject` 会迭代 `object` 的 `key` 和 `value` ，
 * 将 `key` 、`value` 和 `object` 传给 `predicate` 函数，最后返回一个数组，
 * 数组包含所有 `predicate` 函数返回真值时的 `value` 值。
 */
function filterObject(object, predicate) {
  const result = [];
  object = Object(object);
  Object.keys(object).forEach(key => {
    const value = object[key];
    if (predicate(value, key, object)) {
      result.push(value);
    }
  });
  return result;
}

export default filterObject;
