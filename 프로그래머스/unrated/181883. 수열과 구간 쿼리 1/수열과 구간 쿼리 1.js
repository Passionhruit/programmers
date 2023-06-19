function solution(arr, queries) {
    for(j = 0; j < queries.length; j++) {
        var [s,e] = queries[j]
        arr = arr.map((v,i) => s <= i && i <= e ? v = v + 1 : v)
    } return arr
}