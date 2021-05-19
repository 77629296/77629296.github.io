import basePullAll from '../basePullAll';

function pullAllBy(array, values, iteratee) {
  return array != null && array.length && values != null && values.length
    ? basePullAll(array, values, iteratee)
    : array;
}

export default pullAllBy;
