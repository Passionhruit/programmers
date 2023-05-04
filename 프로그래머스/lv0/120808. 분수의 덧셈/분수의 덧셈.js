function solution(n1, d1, n2, d2) {
    var d3 = d1*d2
    var n3 = d1*n2+d2*n1
    var answer = []
    for(i = 1; i <= d3; i++) {
        if(d3%i == 0 && n3%i == 0) {
            answer.push(i)
        }
    } return [n3/answer[answer.length-1], d3/answer[answer.length-1]]
}