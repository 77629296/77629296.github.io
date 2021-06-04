function baseProperty(key) {
  return object => (object == null ? undefined : object[key]);
}
export default baseProperty;
