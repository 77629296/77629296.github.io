function arrayIncludesWith(array, target, comparator) {
  if (array == null) {
    return false;
  }

  for (const value of array) {
    if (comparator && comparator(target, value)) {
      return true;
    }
  }
  return false;
}

export default arrayIncludesWith;
