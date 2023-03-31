function solution(n) {
    var array = `${n}`.split("");
    var answer = []
    for (i = 0; i < array.length; i ++) {
        answer.push(parseInt(array[i]))
    }
    return answer.reverse();
}