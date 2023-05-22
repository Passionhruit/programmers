function solution(arr, queries) {
    for(i = 0; i < queries.length; i++) {
        var [a,b,c] = queries[i];
        arr.forEach((v,j) => j >= a && j <= b && j % c == 0 
                    ? arr[j] = arr[j] + 1 : arr[j])
    } return arr
}