function solution(strArr) {
    var answer = []
    strArr.forEach((a) => {
        a.includes("ad") ? a : answer.push(a)
    }) 
    return answer
}