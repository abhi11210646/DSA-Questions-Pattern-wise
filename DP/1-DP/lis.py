# https://leetcode.com/problems/longest-increasing-subsequence/description

class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        lis = 1
        dp = [1] * len(nums)
        for i in range(1, len(nums)):
            prev = i-1
            while(prev >= 0):
                if nums[i] > nums[prev]:
                    dp[i] = max(dp[i], 1 + dp[prev])
                    if dp[i] > lis:
                        lis = dp[i]
                prev = prev  - 1
        return lis 