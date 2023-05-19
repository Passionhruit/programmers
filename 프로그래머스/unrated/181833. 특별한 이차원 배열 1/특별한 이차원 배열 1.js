function solution(n) {
    var answer = [];
    for(i = 0; i < n; i++) {
        var arr = [];
        for(j = 0; j < n; j++) {
            j == i ? arr.push(1) : arr.push(0)
        }
        answer.push(arr)
    } return answer
}