package leetcode

import "sort"

// https://leetcode.com/problems/non-overlapping-intervals

func eraseOverlapIntervals(intervals [][]int) int {

	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][1] < intervals[j][1]
	})

	count := 0
	prev := intervals[0]

	for i := 1; i < len(intervals); i++ {
		if prev[1] <= intervals[i][0] { // non-overlapping
			prev = intervals[i]
		} else { // Overlapping
			count++
		}
	}
	return count
}
