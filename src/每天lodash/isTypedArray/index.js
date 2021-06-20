import getTag from '../getTag';
import nodeTypes from '../nodeTypes';
import isObjectLike from '../isObjectLike';

const reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/;

const nodeIsTypedArray = nodeTypes && nodeTypes.isTypedArray;
const isTypedArray = nodeIsTypedArray
  ? value => nodeIsTypedArray(value)
  : value => isObjectLike(value) && reTypedTag.test(getTag(value));

export default isTypedArray;
