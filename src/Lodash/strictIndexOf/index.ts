/**
 * strictIndexOf([1, 4, 3, 2], 4) // 1
 * strictIndexOf([1, 4, 3, 2], 3) // 2
 */
 function strictIndexOf(array, value, fromIndex) {
  let index = fromIndex - 1
  const { length } = array

  while (++index < length) {
    if (array[index] === value) {
      return index
    }
  }
  return -1
}

export default strictIndexOf