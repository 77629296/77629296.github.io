function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, (value, index, collection) => {
    accumulator = initAccum
      ? ((initAccum = false), value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}
export default baseReduce;
