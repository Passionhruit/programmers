function solution(n) {
    var sum = 0
    var string_n = n.toString();
    var array = string_n.split("");
    
    for (let i = 0; i < array.length; i++) {
        sum = sum + parseInt(array[i])
    } 
    return sum
}