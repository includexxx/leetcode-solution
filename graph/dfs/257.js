
var binaryTreePaths = function (root) {

    let arr = [];
    dfs(root, [])
    function dfs(root, temp) {
        if (!root) return
        temp.push(root.val);

        if (!root.left && !root.right) {
            let str = temp[0].toString();
            for (let i = 1; i < temp.length; i++) str += ("->" + temp[i].toString());
            arr.push(str);
        }
        dfs(root.left, temp);
        dfs(root.right, temp);

        temp.pop();

    }
    return arr;
};