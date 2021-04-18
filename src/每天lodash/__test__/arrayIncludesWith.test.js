import _ from '../';

describe('arrayIncludesWith', () => {
  var array = ['a', 'b', 'c', 'd'];
  var comparatorEqual = (target, value) => target === value;
  var comparatorAddB = (target, value) => target === value + 'b';
  it('包含a 没有比较函数', () => {
    expect(_.arrayIncludesWith(array, 'a')).toEqual(false);
  });

  it('包含a 比较相等', () => {
    expect(_.arrayIncludesWith(array, 'a', comparatorEqual)).toEqual(true);
  });

  it('包含ab 比较相等', () => {
    expect(_.arrayIncludesWith(array, 'ab', comparatorEqual)).toEqual(false);
  });

  it('包含ab 拼接后比较相等', () => {
    expect(_.arrayIncludesWith(array, 'ab', comparatorAddB)).toEqual(true);
  });
});
