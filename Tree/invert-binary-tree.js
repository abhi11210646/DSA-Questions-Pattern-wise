// https://leetcode.com/problems/invert-binary-tree/description/

var invertTree = function(root) {
    function invert(node) {
        if(node == null) return;

        let t = node.right;
        node.right = node.left;
        node.left = t;

        invert(node.left);
        invert(node.right);
    }
    invert(root);
    return root;
};