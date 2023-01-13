const isHappy = (n: number): boolean => {
  // recursive
  // escape case: n = 1
  const set = new Set();
  const recursion = (num: number): boolean => {
    set.add(num);
    const sum = num
      .toString()
      .split("")
      .reduce((acc, val) => acc + Math.pow(parseInt(val), 2), 0);

    console.log(sum);

    if (sum === 1) return true;
    if (set.has(sum)) return false;

    return recursion(sum);
  };

  return recursion(n);
};

console.log(isHappy(19));
