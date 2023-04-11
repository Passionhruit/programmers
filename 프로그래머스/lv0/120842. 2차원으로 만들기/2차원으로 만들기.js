function solution(num_list, n) {
    var array = [];
    for(i = 0; i < num_list.length;) {
        array.push(num_list.splice(i,n))
    } return array;
}