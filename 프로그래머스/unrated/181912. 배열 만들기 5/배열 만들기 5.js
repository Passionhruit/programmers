function solution(intStrs, k, s, l) {
    var answer = intStrs.map((v,i) => v.slice(s,s+l)*1)
    return answer.filter((v)=> v > k )
}