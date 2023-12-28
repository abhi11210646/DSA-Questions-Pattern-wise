class Node {
    left = null;
    right = null;
    data = "";
    constructor(data) { this.data = data }
}
main();
function main() {
    /* Construct the following tree
                   1
                 /   \
                /     \
               2       3
              /      /   \
             /      /     \
            4      5       6
                  / \
                 /   \
                7     8
    */

    const root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.right.left = new Node(5);
    root.right.right = new Node(6);
    root.right.left.left = new Node(7);
    root.right.left.right = new Node(8);
    console.log("**Recusrive**");
    console.log("inorder->", inorderRecursive(root).toString());
    console.log("preorder->", preorderRecursive(root).toString());
    console.log("postorder->", postorderRecursive(root).toString());
    console.log("**Iterative**");
    console.log("inorder->", inorderIterative(root).toString());
    console.log("preorder->", preorderIterative(root).toString());
}

function inorderRecursive(root) {
    if (root == null) return [];
    let res1 = inorderRecursive(root.left);
    let res2 = inorderRecursive(root.right);
    return [...res1, root.data, ...res2];
}
// https://leetcode.com/problems/binary-tree-inorder-traversal/
function inorderIterative(root) {
    if (root == null) return null;

    const stack = [];
    const result = [];
    while (root != null || stack.length) {
        while (root != null) {
            stack.push(root);
            root = root.left;
        }
        const currNode = stack.pop();
        result.push(currNode.data);
        root = currNode.right;
    }
    return result;
}

function postorderRecursive(root) {
    if (root == null) return [];
    let res1 = postorderRecursive(root.left);
    let res2 = postorderRecursive(root.right);
    return [...res1, ...res2, root.data];
}
function preorderRecursive(root) {
    if (root == null) return [];
    let res1 = preorderRecursive(root.left);
    let res2 = preorderRecursive(root.right);
    return [root.data, ...res1, ...res2];
}
function preorderIterative(root) {
    if (root == null) return null;

    const stack = [];
    const result = [];
    stack.push(root);

    while (stack.length > 0) {
        const s = stack.pop();
        result.push(s.data);
        if (s.right != null) stack.push(s.right);
        if (s.left != null) stack.push(s.left);
    }

    return result;
}