/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  const words = text.split(" ");
  const letters = brokenLetters.split("");
  return words.filter((i) => letters.every((l) => !i.includes(l))).length;
};

console.log(canBeTypedWords("hello there you sexy thing", "g"));
console.log(canBeTypedWords("hello there you sexy thing", "g"));
console.log(canBeTypedWords("hello there you sexy thing", "gx"));
