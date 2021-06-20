import root from '../root';

/** CommonJS 检测 exports */
const freeExports =
  typeof exports === 'object' &&
  exports !== null &&
  !exports.nodeType &&
  exports;

/** CommonJS 检测 module */
const freeModule =
  freeExports &&
  typeof module === 'object' &&
  module !== null &&
  !module.nodeType &&
  module;

/** exports 为 module.exports 的引用检测 */
const moduleExports = freeModule && freeModule.exports === freeExports;

/** 满足模块机制 返回Buffer对象 */
const Buffer = moduleExports ? root.Buffer : undefined;

/* 存在Buffer对象 返回isBuffer */
const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

const isBuffer = nativeIsBuffer || (() => false);

export default isBuffer;
