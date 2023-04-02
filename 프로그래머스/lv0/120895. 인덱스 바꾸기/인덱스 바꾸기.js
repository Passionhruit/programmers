function solution(my_string, num1, num2) {
    var array = my_string.split("");
    var copy = [...array]
    
    array[num1] = `${copy[num2]}`
    array[num2] = `${copy[num1]}`
    return array.join("");
} 