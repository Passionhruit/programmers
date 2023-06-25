function solution(arr, k) {
    var array = [...new Set(arr)].slice(0,k)
    var answer = []
    for(i = 0; i < k - array.length; i++) {
        answer.push(-1)
    }
    return [...array, ...answer]
}