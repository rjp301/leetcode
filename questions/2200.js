/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
  const arr = Array.from(Array(nums.length).keys());
  const keys = arr.filter((i) => nums[i] == key);

  let [i, j] = [0, 0];
  const result = [];

  while (i < nums.length) {
    if (Math.abs(i - keys[j]) <= k) result.push(i);
    if ((i - keys[j] === k)) {
      j += 1;
      if (j === keys.length) break;
    }
    i += 1;
  }

  return result;
};

console.log(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1));
console.log(findKDistantIndices([2, 2, 2, 2, 2], 2, 2));
