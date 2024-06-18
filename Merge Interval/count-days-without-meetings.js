https://leetcode.com/problems/count-days-without-meetings/

/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {

    meetings.sort(function (a, b) {
        return a[0] - b[0];
    })

    let count = meetings[0][0] - 1  // edge case 1
    let prev = meetings[0];
    for (let i = 1; i < meetings.length; i++) {
        let curr = meetings[i];
        if(prev[1] < curr[0]) { // Non-Overlapping
            count +=  (curr[0] - prev[1] - 1);
            prev = curr;
        }else {
            prev[1] = Math.max(prev[1], curr[1]);
        }
    }
    count += (days - prev[1]) // edge case 2
    return count;
};