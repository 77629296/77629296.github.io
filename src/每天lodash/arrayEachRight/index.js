function arrayEachRight(array, iteratee) {
  let length = array == null ? 0 : array.length;

  while (length--) {
    if (iteratee(array[length], length, array) === false) {
      break;
    }
  }
  return array;
}

export default arrayEachRight;
