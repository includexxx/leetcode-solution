var isSameTree = function (p, q) {
    if (!p && !q) return true;

    if (p && q) {
        return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    return false;

};