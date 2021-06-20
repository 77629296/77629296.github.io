import assignValue from '../assignValue';
import baseZipObject from '../baseZipObject';

function zipObject(props, values) {
  return baseZipObject(props || [], values || [], assignValue);
}

export default zipObject;
