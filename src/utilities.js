const random = (start, end) => Math.floor(Math.random() * end) + start;

const gcd = (a, b) => {
  if (a === b) return a;

  const min = a < b ? a : b;

  for (let i = min; i > 1; i -= 1) {
    if (a % i === 0 && b % i === 0) return i;
  }

  return 1;
};

export { random, gcd };
