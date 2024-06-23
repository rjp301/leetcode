# Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

from typing import List


class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        count = len(nums)
        for index, num in enumerate(nums):
            if num == val:
                count -= 1
                nums.pop(index)

        return count
