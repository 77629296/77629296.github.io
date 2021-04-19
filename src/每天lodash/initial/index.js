import slice from '../slice';

function initial(array) {
  const length = array == null ? 0 : array.length;
  return length ? slice(array, 0, -1) : [];
}
export default initial;
