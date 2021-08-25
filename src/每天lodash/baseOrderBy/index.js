import baseEach from '../baseEach';
import baseSortBy from '../baseSortBy';
import baseGet from '../baseGet';
import compareMultiple from '../compareMultiple';
import isArrayLike from '../isArrayLike';

const identity = value => value;
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = iteratees.map(iteratee => {
      if (Array.isArray(iteratee)) {
        return value =>
          baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
      }

      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  let criteriaIndex = -1;
  let eachIndex = -1;

  const result = isArrayLike(collection) ? new Array(collection.length) : [];

  baseEach(collection, value => {
    const criteria = iteratees.map(iteratee => iteratee(value));

    result[++eachIndex] = {
      criteria,
      index: ++criteriaIndex,
      value,
    };
  });

  return baseSortBy(result, (object, other) =>
    compareMultiple(object, other, orders),
  );
}

export default baseOrderBy;
