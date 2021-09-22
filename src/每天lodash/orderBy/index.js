import baseOrderBy from '../baseOrderBy';

function orderBy(collection, iteratees, orders) {
  if (collection == null) {
    return [];
  }
  if (!Array.isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  if (!Array.isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy(collection, iteratees, orders);
}
export default orderBy;
