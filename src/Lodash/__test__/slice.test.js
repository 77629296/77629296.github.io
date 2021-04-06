import _ from '../';

describe('slice', () => {
  var array = ['a', 'b', 'c', 'd'];
  it('默认开始位置', () => {
    expect(_.slice(array)).toEqual(array);
  });

  it('开始位置为0', () => {
    expect(_.slice(array, 0)).toEqual(array);
  });

  it('开始位置为1', () => {
    expect(_.slice(array, 1)).toEqual(['b', 'c', 'd']);
  });

  it('有开始和结束位置', () => {
    expect(_.slice(array, 1, 2)).toEqual(['b']);
  });
});
