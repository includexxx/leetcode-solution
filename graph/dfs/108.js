var sortedArrayToBST = function (nums) {
    let arr = nums;
    function dfs(left, right) {
        if (left > right) return null;
        if (left === right) {
            return new TreeNode(arr[left])
        }
        let mid = Math.floor((left + right) / 2);
        let node = new TreeNode(arr[mid]);
        node.left = dfs(left, mid - 1);
        node.right = dfs(mid + 1, right);
        return node;
    }

    let root = dfs(0, arr.length - 1);
    return root;
};