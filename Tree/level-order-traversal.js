// https://leetcode.com/problems/binary-tree-level-order-traversal/description/

var levelOrder = function (root) {
    if (root == null) return [];

    const q = [];
    q.push(root);

    const result = [];
    while (q.length) {
        let len = q.length;
        let level = [];
        for (let i = 0; i < len; i++) {
            let n = q.shift();
            level.push(n.val);
            if (n.left != null) q.push(n.left);
            if (n.right != null) q.push(n.right);
        }
        result.push(level);
    }
    return result;
}