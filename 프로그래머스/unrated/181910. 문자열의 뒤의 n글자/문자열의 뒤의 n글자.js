function solution(my_string, n) {
    var start = my_string.length-n
    return my_string.slice(start,n+start)
}