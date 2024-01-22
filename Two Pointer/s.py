# https://leetcode.com/problems/rotate-array/description/

class Solution:
    def __rotate_by_index(self, nums: List[int], start: int, end:int) -> None:
        while(start <= end):
            t = nums[start]
            nums[start] = nums[end]
            nums[end] = t
            start +=1
            end -=1

    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        length = len(nums)
        k = k%length # case: more than length of array
        if(k == 0):
            return None
        self.__rotate_by_index(nums, 0, length - k-1)
        self.__rotate_by_index(nums, length - k, length-1)
        nums.reverse()