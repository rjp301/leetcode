/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
module.exports = function (nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i >= num) {
        dp[i] += dp[i - num];
      }
    }
  }

  return dp[target];
};
