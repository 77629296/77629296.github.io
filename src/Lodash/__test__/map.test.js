import assert from 'assert';
import _ from '../';

describe('map', () => {
  var array = [1, 2, 3, 4];
  var arrayDouble = [2, 4, 6, 8];
  var handleArrayDouble = item => item * 2;
  var handleArrayNew = item => item * 1;

  it('数组值翻倍', () => {
    expect(_.map(array, handleArrayDouble)).toEqual(arrayDouble);
  });

  it('产生新数组 严格不相等', () => {
    assert.notStrictEqual(_.map(array, handleArrayNew), array);
  });
});
