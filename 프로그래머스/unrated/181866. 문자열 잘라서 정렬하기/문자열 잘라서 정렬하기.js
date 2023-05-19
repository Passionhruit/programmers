function solution(myString) {
    var answer = myString.split("x")
    return answer.filter(v => v!=="").sort();
}