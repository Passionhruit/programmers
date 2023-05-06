function solution(myString) {
    var before = ["a","b","c","d","e","f","g","h","i","j","k"] 
    var array = myString.split("");
    return array.map(v => before.includes(v) ? v = "l" : v).join("")
}
