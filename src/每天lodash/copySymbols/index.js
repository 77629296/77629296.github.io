import copyObject from '../copyObject';
import getSymbols from '../getSymbols';

function copySymbols(source, object) {
  copyObject(source, getSymbols(source), object)
}
export default copySymbols;
