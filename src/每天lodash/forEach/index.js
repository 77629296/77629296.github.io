import arrayEach from '../arrayEach';
import baseEach from '../baseEach';

function forEach(collection, iteratee) {
  const func = Array.isArray(collection) ? arrayEach : baseEach;
  return func(collection, iteratee);
}

export default forEach;
