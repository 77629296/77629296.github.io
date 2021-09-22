import baseReduce from '../baseReduce';
import arrayReduce from '../arrayReduce';
import baseEachRight from '../baseEachRight';

function reduce(collection, iteratee, accumulator) {
  const func = Array.isArray(collection) ? arrayReduce : baseReduce;
  const initAccum = arguments.length < 3;
  return func(collection, iteratee, accumulator, initAccum, baseEachRight);
}

export default reduce;
