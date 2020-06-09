
var isSymmetric = function (root) {
    if (root === null) return true;
    return dfs(root, root)
};

function dfs(leftTree, rightTree) {
    if (!leftTree && !rightTree) return true;
    if (leftTree && rightTree)
        return leftTree.val === rightTree.val && dfs(leftTree.left, rightTree.right) && dfs(leftTree.right, rightTree.left)
    return false;
}