function solution(a, d, included) {
    var answer = 0;
    for(i = 0; i < included.length; i++) {
        included[i] ? answer += a + d * i : a
    } return answer
}