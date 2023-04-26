function solution(myString, pat) {
    var array = myString.split("")
    var answer = array.map(v => v == "A" ? "B" : "A").join("")
    return answer.includes(pat) ? 1 : 0;
    
}