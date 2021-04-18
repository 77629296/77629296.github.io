import getTag from '../getTag';
import isObjectLike from '../isObjectLike';

function isArguments(value) {
  return isObjectLike(value) && getTag(value) == '[object Arguments]';
}

export default isArguments;
