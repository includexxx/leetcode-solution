var leafSimilar = function (root1, root2) {

    let arr1 = [];
    let arr2 = [];
    let arr = [];

    let dfs = function (root) {
        if (!root) return;

        if (!root.left && !root.right) arr.push(root.val)
        dfs(root.left)
        dfs(root.right)
    };


    dfs(root1);
    arr1 = arr;
    arr = [];
    dfs(root2);
    arr2 = arr;
    return JSON.stringify(arr1) === JSON.stringify(arr2);
};