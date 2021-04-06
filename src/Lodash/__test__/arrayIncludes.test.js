import _ from '../';

describe('arrayIncludes', () => {
  var array = ['a', 'b', 'c', 'd'];
  it('包含a', () => {
    expect(_.arrayIncludes(array, 'a')).toEqual(true);
  });

  it('不包含ab', () => {
    expect(_.arrayIncludes(array, 'ab')).toEqual(false);
  });
});
