# https://leetcode.com/problems/container-with-most-water/description

def maxArea(height):
    start = 0
    maxArea = 0
    end = len(height)-1
    while start < end:
        base = end - start
        area = base * min(height[start], height[end])
        maxArea = max(maxArea, area)
        
        if height[start] < height[end]:
            start = start + 1
        else:
            end = end - 1    
    return maxArea
    
    
    
print(maxArea([1,8,6,2,5,4,8,3,7]))