import baseForRight from '../baseForRight';
import keys from '../keys';

function baseForOwnRight(object, iteratee) {
  return object && baseForRight(object, iteratee, keys);
}
export default baseForOwnRight;
