function solution(arr, queries) {
    for(i = 0; i < queries.length; i++) {
        var [a,b] = queries[i];
        [arr[a],arr[b]] = [arr[b],arr[a]]
    } 
    return arr
}
