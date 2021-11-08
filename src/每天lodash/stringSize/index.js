import hasUnicode from '../hasUnicode';
import unicodeSize from '../unicodeSize';
import asciiSize from '../asciiSize';

function stringSize(string) {
  return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
}

export default stringSize;
