function solution(q, r, code) {
    var arr = code.split("")
    return arr.filter((v,i) => i % q == r).join("")
}