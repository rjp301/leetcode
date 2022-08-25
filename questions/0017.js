/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];

  const letters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const dfs = (index, str) => {
    if (str.length === digits.length) return result.push(str);

    for (const char of letters[digits[index]]) {
      dfs(index + 1, str + char);
    }
  };

  const result = [];
  dfs(0, "");

  return result;
};

console.table(letterCombinations("23"));
console.table(letterCombinations(""));
console.table(letterCombinations("543"));
