// https://leetcode.com/problems/binary-tree-right-side-view/description/

var rightSideView = function(root) {
    if(root == null) return [];
    const result = [];

    // const q = [];
    // q.push(root);
    // while(q.length) {
    //     let len = q.length;
    //     result.push(q[len-1].val); //(2) logic for right view
    //     for(let i=0;i<len;i++) {
    //         let n = q.shift();
    //         // if(i+1 == len) result.push(n.val); //(1) logic for right view
    //         if(n.left != null) q.push(n.left);
    //         if(n.right != null) q.push(n.right);
    //     }
    // }

    function rightView(node, lvl){
        if(node == null) return;
        result[lvl] = node.val;
        rightView(node.left, lvl+1);
        rightView(node.right, lvl+1);
    }
    rightView(root,0);

    return result;
};