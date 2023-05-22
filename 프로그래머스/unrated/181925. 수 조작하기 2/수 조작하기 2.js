function solution(numLog) {
    var answer = []
    let num = {
        "1" : "w",
        "-1" : "s",
        "10" : "d",
        "-10" : "a",
    }
    for(i = 0; i < numLog.length; i++) {
        answer.push(num[numLog[i+1]-numLog[i]]);
    }
    return answer.join("")
}