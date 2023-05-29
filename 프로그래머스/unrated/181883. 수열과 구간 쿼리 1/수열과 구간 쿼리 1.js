function solution(arr, queries) {
    for(i = 0; i < queries.length; i++) {
        var [s,e] = queries[i]
        arr = arr.map((v,i) => s <= i && i <= e ? v = v+1 : v)
    } return arr
}