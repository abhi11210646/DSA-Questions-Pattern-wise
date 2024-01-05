// https://leetcode.com/problems/symmetric-tree/

var isSymmetric = function(root) {

    function symmetric(n1,n2) {
        if(n1 == null && n2 == null) return true;
        if(n1 == null || n2 == null) return false;
        if(n1.val != n2.val) return false;
        return symmetric(n1.left, n2.right) && symmetric(n1.right, n2.left);
    }

    return symmetric(root.left, root.right);
};