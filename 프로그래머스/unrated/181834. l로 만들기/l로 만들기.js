function solution(myString) {
    var array = myString.split("");
    return array.map(v => v < "l" ? v = "l" : v).join("")
}
