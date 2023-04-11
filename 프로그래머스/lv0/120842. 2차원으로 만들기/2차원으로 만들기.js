function solution(num_list, n) {
    var array = [];
    for(i = 0; i < num_list.length;) {
        const cells = [];
        for(j = 0; j < n; j++) {
            cells.push(num_list[i])
            i = i + 1;
        }
        array.push(cells)
    } return array;
}