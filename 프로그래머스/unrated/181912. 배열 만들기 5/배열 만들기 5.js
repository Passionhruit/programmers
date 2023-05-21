function solution(intStrs, k, s, l) {
    var answer = intStrs.filter((v) => v.slice(s,s+l) > k)
    return answer.map((v) => v.slice(s,s+l)*1)
}