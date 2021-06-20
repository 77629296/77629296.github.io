function baseZipObject(props, values, assignFunc) {
  let index = -1;
  const length = props.length;
  const valsLength = values.length;
  const result = {};

  while (++index < length) {
    const value = index < valsLength ? values[index] : undefined;
    assignFunc(result, props[index], value);
  }
  return result;
}
