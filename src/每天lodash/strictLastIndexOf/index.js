function strictLastIndexOf(array, value, fromIndex) {
  let index = fromIndex + 1;
  while (index--) {
    if (array[index] === value) {
      return index;
    }
  }
  return index;
}

export default strictLastIndexOf;
