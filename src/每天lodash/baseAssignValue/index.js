function baseAssignValue(object, key, value) {
  if (key == '__proto__') {
    Object.defineProperty(object, key, {
      writable: true,
      configurable: true,
      enumerable: true,
      value,
    });
  } else {
    object[key] = value;
  }
}

export default baseAssignValue;
