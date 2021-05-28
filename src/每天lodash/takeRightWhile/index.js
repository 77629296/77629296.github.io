import baseWhile from '../slice';

function takeRightWhile(array, predicate) {
  return array != null && array.length
    ? baseWhile(array, predicate, false, true)
    : [];
}
export default takeRightWhile;
