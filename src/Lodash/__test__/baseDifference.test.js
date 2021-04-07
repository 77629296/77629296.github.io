import _ from '../';

describe('baseDifference 排除', () => {
  var array = [2, 4, 5, 6, 8];
  var values = [1, 2, 3, 4];
  var iteratee = value => (value *= 3);
  it('没有iteratee', () => {
    expect(_.baseDifference(array, values)).toEqual([5, 6, 8]);
  });

  it('自定义iteratee', () => {
    expect(_.baseDifference(array, values, iteratee)).toEqual([5, 6, 8]);
  });
});
