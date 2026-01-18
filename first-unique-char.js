function firstUniqueChar(str) {
  const count = {};

  for (let c of str) count[c] = (count[c] || 0) + 1;

  for (let c of str) {
    if (count[c] === 1) return c;
  }

  return null;
}
