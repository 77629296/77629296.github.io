import root from '../root';

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

const Buffer = moduleExports ? root.Buffer : undefined,
  allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    // TODO:
    return buffer.slice();
  }
  const length = buffer.length;
  const result = allocUnsafe
    ? allocUnsafe(length)
    : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}
export default cloneBuffer;
