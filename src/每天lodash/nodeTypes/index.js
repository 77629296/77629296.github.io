import freeGlobal from '../freeGlobal';

// 同isBuffer中的判断
const freeExports =
  typeof exports === 'object' &&
  exports !== null &&
  !exports.nodeType &&
  exports;
const freeModule =
  freeExports &&
  typeof module === 'object' &&
  module !== null &&
  !module.nodeType &&
  module;
const moduleExports = freeModule && freeModule.exports === freeExports;

/** 从node环境获取process */
const freeProcess = moduleExports && freeGlobal.process;

const nodeTypes = (() => {
  try {
    // 获取nodejs util方法
    const typesHelper =
      freeModule && freeModule.require && freeModule.require('util').types;
    return typesHelper
      ? typesHelper
      : /* Legacy process.binding('util') for Node.js earlier than v10. */
        freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
})();

export default nodeTypes;
