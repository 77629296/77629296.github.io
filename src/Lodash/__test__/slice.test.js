import _ from '../';

describe('slicea', () => {
  var array = ['a', 'b', 'c', 'd'];
  it('defalut', () => {
    expect(_.slice(array)).toEqual(array);
  });

  it('has start', () => {
    expect(_.slice(array, 0)).toEqual(array);
  });

  it('has start 1', () => {
    expect(_.slice(array, 1)).toEqual(['b', 'c', 'd']);
  });

  it('has start and end', () => {
    expect(_.slice(array, 1, 2)).toEqual(['b']);
  });
});
