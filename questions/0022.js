/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  generate(result, "", 0, 0, n);
  return result;
};

const generate = (result, s, open, close, n) => {
  // base case
  if (open === n && close === n) {
    result.push(s);
    return;
  }
  // number of open less than n
  if (open < n) generate(result, s + "(", open + 1, close, n);
  if (close < open) generate(result, s + ")", open, close + 1, n);
};

console.table(generateParenthesis(4))