function solution(n) {
    var answer = []
    for(i = 0; i <= n; i++) {
        i%2 == 1 ? answer.push(i) : null
    }
    return answer
}