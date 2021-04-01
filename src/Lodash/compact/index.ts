/**
 * var array = [1, 2, false, 0, 3, undefined, 4]
 * compact(array) = [1, 2, 3, 4]
 */
function compact(array) {
  let resIndex = 0;
  const result = [];

  if (!array) {
    return result;
  }

  for (const value of array) {
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

export default compact;
