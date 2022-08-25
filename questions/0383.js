var canConstruct = function (ransomNote, magazine) {
  const countLetters = (string) => {
    const list = string.split("");
    const reducer = (acc, val) => (
      (acc[val] = acc[val] ? acc[val] + 1 : 1), acc
    );
    return list.reduce(reducer, {});
  };

  const ransomNoteCount = countLetters(ransomNote);
  const magazineCount = countLetters(magazine);

  return Object.keys(ransomNoteCount).every(
    (key) => magazineCount[key] >= ransomNoteCount[key]
  );
};

console.log(canConstruct("hello", "hello there"));
