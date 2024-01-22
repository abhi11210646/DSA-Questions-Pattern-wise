# https://leetcode.com/problems/majority-element/

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        maj_ele = nums[0]
        maj_count = 1
        for i in range(1, len(nums)):
            if nums[i] == maj_ele:
                maj_count += 1
            else:
                maj_count -= 1
            if maj_count == 0:
                maj_ele = nums[i+1]
        return maj_ele