function solution(my_string, alp) {
    var array = my_string.split("")
    return array.map((v)=> v == alp ? v = v.toUpperCase() : v).join("")
}