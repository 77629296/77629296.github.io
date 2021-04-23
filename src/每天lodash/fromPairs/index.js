function fromPairs(pairs) {
  const result = {};
  if (pairs == null) {
    return pairs;
  }
  for (const pair of pairs) {
    result[pair[0]] = pair[1];
  }
  return result;
}

export default fromPairs;
