var floodFill = function (image, sr, sc, newColor) {


    let visited = [];
    let color = image[sr][sc];
    image[sr][sc] = newColor;
    for (let i = 0; i < image.length; i++) {
        visited[i] = [];
        for (let j = 0; j < image[i].length; j++)visited[i].push(false)
    }
    let dr = [-1, 0, 1, 0];
    let dc = [0, 1, 0, -1];

    dfs(sr, sc);
    function dfs(sr, sc) {
        for (let i = 0; i < 4; i++) {
            let r = sr + dr[i];
            let c = sc + dc[i];
            if (r >= 0 && r < image.length && c >= 0 && c < image[sr].length) {
                if (visited[r][c] === false && image[r][c] === color) {
                    visited[r][c] = true;
                    image[r][c] = newColor;
                    dfs(r, c);
                }
            }
        }

    }


    return image;
};