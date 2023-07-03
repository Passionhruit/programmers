function solution(arr, k) {
    var array = [...new Set(arr)].slice(0,k)
    var num = k - array.length;
    for(i = 0; i < num; i++) {
        array.push(-1)
    }
    return array;
}