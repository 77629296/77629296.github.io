const INFINITY = 1 / 0;
const createSet =
  Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY
    ? values => new Set(values)
    : () => {};

export default createSet;
