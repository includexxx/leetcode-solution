var isBalanced = function (root) {
    let ans = true;
    dfs(root);
    function dfs(root) {
        if (!root) return 0;
        let left = dfs(root.left);
        let right = dfs(root.right);
        if (Math.abs(left - right) > 1) ans = false;
        return Math.max(left, right) + 1;
    }
    return ans;
};