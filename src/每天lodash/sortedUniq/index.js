import eq from '../eq';

function baseSortedUniq(array, iteratee) {
  let seen;
  let index = -1;
  let resIndex = 0;

  const { length } = array;
  const result = [];

  while (++index < length) {
    const value = array[index],
      computed = iteratee ? iteratee(value) : value;
    // !index 处理第一次循环
    if (!index || !eq(computed, seen)) {
      seen = computed;
      // value === 0 处理+0 -0
      result[resIndex++] = value === 0 ? 0 : value;
    }
  }
  return result;
}

export default baseSortedUniq;
