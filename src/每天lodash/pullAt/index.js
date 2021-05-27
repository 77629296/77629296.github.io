import baseAt from '../baseAt';
import basePullAt from '../basePullAt';
import isIndex from '../isIndex';
import compareAscending from '../compareAscending';

function pullAt(array, ...indexes) {
  const length = array == null ? 0 : array.length;
  const result = baseAt(array, indexes);

  basePullAt(
    array,
    map(indexes, index => (isIndex(index, length) ? +index : index)).sort(
      compareAscending,
    ),
  );
  return result;
}
export default pullAt;
