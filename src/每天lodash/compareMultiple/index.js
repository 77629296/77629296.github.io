import compareAscending from '../compareAscending';

function compareMultiple(object, other, orders) {
  let index = -1;
  const objCriteria = object.criteria;
  const otherCriteria = other.criteria;
  const length = objCriteria.length;
  const ordersLength = orders.length;

  while (++index < length) {
    const order = index < ordersLength ? orders[index] : null;
    const cmpFn =
      order && typeof order === 'function' ? order : compareAscending;
    const result = cmpFn(objCriteria[index], otherCriteria[index]);

    if (result) {
      if (order && typeof order !== 'function') {
        return result * (order === 'desc' ? -1 : 1);
      }
      return result;
    }
  }
  return object.length - other.length;
}

export default compareMultiple;
