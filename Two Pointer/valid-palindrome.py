# https://leetcode.com/problems/valid-palindrome/

class Solution:
    def isAlphaNumeric(self, s:str) -> bool:
        code = ord(s)
        # [a-z] or # [0-9]
        if (code >= 97 and code <= 122 ) or (code >=48 and code <= 57): 
           return True
        return False

    def isPalindrome(self, s: str) -> bool:
        s = s.lower()
        l , r = 0, len(s)-1
        while l < r:
            print(s[l])
            if self.isAlphaNumeric(s[l]) == False:
                l += 1
                continue
            if self.isAlphaNumeric(s[r]) == False:
                r -= 1
                continue
            if s[l] != s[r]:
                return False
            l +=1
            r -=1
        return True