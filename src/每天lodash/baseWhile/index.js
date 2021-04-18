import slice from '../slice';

function baseWhile(array, predicate, isDrop, fromRight) {
  const { length } = array;
  let index = fromRight ? length : -1;

  while (
    (fromRight ? index-- : ++index < length) &&
    predicate(array[index], index, array)
  ) {}

  return isDrop
    ? /**
       *
       * slice(array, index, length)
       * right
       * slice(array, 0, index+1)
       *
       * slice(array, 0, index)
       * slice(array, index + 1, length)
       */

      slice(array, fromRight ? 0 : index, fromRight ? index + 1 : length)
    : slice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
}

export default baseWhile;
