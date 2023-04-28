function solution(binomial) {
    var array = binomial.split(" ")
    var a = array[0]*1
    var b = array[2]*1
    return array[1] == "+" ? a + b : array[1] == "-" ? a - b : a * b
}