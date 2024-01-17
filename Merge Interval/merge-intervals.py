# https://leetcode.com/problems/merge-intervals/description/

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda a:a[0])
        result = []
        prev = intervals[0]
        result.append(prev)
        for i in range(1,len(intervals)):
            curr = intervals[i]
            if curr[0] <= prev[1]:
                prev[1] = max(prev[1], curr[1])
            else:
                result.append(curr)
                prev = curr
        return result