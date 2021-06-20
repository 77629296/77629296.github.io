import baseSet from '../baseSet';
import baseZipObject from '../baseZipObject';

function zipObjectDeep(props, values) {
  // 使用baseSet 支持属性路径
  return baseZipObject(props || [], values || [], baseSet);
}

export default zipObjectDeep;
