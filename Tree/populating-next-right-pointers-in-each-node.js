// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/


var connect = function (root) {
    // let q = [root];
    // let start = 0;

    // while(start < q.length) {
    //     let ele = q[start]; 
    //      if(ele && ele.left && ele.right)  {
    //          q.push(ele.left);
    //          q.push(ele.right);
    //          ele.left.next = ele.right;
    //          if(ele.next) {
    //             ele.right.next = ele.next.left;
    //          }   
    //      } 
    //      start++;
    // }
    // return root;

    function connectNodes(node) {
        if (node && node.left && node.right) {
            node.left.next = node.right;
            if (node.next) {
                node.right.next = node.next.left;
            }
            connectNodes(node.left);
            connectNodes(node.right);
        }

        return node;
    }

    return connectNodes(root);
};