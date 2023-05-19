function solution(my_string, s, e) {
    var array = my_string.split("")
    var reversed = [...array].splice(s,e-s+1).reverse().join("")
    return array.slice(0,s).join("")+reversed+array.slice(e+1,array.length).join("")
}