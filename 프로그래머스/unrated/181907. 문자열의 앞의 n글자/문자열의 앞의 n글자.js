function solution(my_string, n) {
    var array = my_string.split("")
    return array.splice(0,n).join("")
}