var increasingBST = function (root) {
    let arr = [];


    function fun(root) {
        if (!root) return null;
        fun(root.left);
        arr.push(root.val);
        fun(root.right);
    }
    fun(root);
    let head = new TreeNode(arr[0]);
    head.left = null;
    let temp = head;
    for (let i = 1; i < arr.length; i++) {

        let curr = new TreeNode(arr[i]);
        temp.right = curr;
        temp = curr;
    }
    return head;

};