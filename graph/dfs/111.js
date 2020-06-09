
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0;

    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;

};

let root = new TreeNode(1);
root.left = new TreeNode(2);
//root.right = new TreeNode(3);

console.log(minDepth(root))