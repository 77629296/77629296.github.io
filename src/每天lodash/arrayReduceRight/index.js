function arrayReduce(array, iteratee, accumulator, initAccum) {
  const length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[length--];
  }
  while (length--) {
    accumulator = iteratee(accumulator, array[length], length, array);
  }
  return accumulator;
}

export default arrayReduce;
