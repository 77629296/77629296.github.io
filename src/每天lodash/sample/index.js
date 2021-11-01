/**
 * `sample` 的作用是从数组 `array` 中，随机取出其中的一个值。
 */
function sample(array) {
  const length = array == null ? 0 : array.length;
  const index = Math.floor(Math.random() * length);
  return length ? array[index] : undefined;
}

export default sample;
