// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/


var zigzagLevelOrder = function (root) {
    if (root == null) return [];

    let q = [];
    q.push(root);
    let result = [];

    let level = 0;

    while (q.length) {
        let len = q.length;
        let l = [];
        for (let i = 0; i < len; i++) {
            let n = q.shift();
            level % 2 == 0 ? l.push(n.val) : l.unshift(n.val);
            if (n.left != null) q.push(n.left);
            if (n.right != null) q.push(n.right)
        }
        result.push(l);
        level++;
    }
    return result;
};