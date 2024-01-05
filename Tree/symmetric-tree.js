// https://leetcode.com/problems/symmetric-tree/

var isSymmetric = function (root) {

    function symmetric(n1, n2) {
        if (n1 == null && n2 == null) return true;
        if (n1 == null || n2 == null) return false;
        if (n1.val != n2.val) return false;
        return symmetric(n1.left, n2.right) && symmetric(n1.right, n2.left);
    }
    return symmetric(root.left, root.right);
    
};

var isSymmetricIterative = function (root) {
    let stack = [];
    stack.push([root.left, root.right]);
    while (stack.length) {
        let [n1, n2] = stack.pop();
        if (n1 == null && n2 == null) continue; // Both have no children 
        if (n1 == null || n2 == null || n1.val != n2.val) return false; // both are not equalso no point of going further just return from here

        stack.push([n1.left, n2.right]);
        stack.push([n1.right, n2.left]);
    }
    return true;
}