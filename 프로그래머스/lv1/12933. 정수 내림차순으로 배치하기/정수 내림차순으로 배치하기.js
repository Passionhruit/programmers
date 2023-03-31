function solution(n) {
    var array = `${n}`.split("")
    return parseInt((array.sort((a, b) => b - a)).join(""))
    
}