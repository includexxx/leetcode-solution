var GetImportance = function (employees, id) {
    let arr = [];
    for (let emp of employees) {
        arr[emp.id] = []
        arr[emp.id].push(emp);

    }
    function dfs(id) {
        if (arr[id][0].subordinates.length === 0) return arr[id][0].importance;
        let sum = 0;
        for (let s of arr[id][0].subordinates) {

            sum = sum + dfs(s);
        }
        return sum + arr[id][0].importance;
    }
    let ans = dfs(id)
    return ans;
};