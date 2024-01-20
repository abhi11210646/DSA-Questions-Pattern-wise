# https://leetcode.com/problems/longest-palindromic-substring/description/
class Solution:
    p = ""
    def expandFromCenter(self, s:str, j:int, k:int) -> None:
        while(j >= 0 and k < len(s) and s[j] == s[k]):
            j = j - 1
            k = k + 1

        if(len(s[j+1:k]) > len(self.p)):
            self.p = s[j+1:k]

    def longestPalindrome(self, s: str) -> str:
        for i in range(len(s)):
            j , k = i, i
            self.expandFromCenter(s, j, k)
            
            j , k = i, i+1
            self.expandFromCenter(s, j, k)

        return self.p
