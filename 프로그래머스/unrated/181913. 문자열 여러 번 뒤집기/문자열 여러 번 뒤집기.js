function solution(my_string, queries) {
    for(i = 0; i < queries.length; i++) {
        var [s,e] = queries[i]
        var part = my_string.slice(s,e+1)
        var reversed = [...part].reverse().join("")
        my_string = my_string.slice(0,s) + reversed + my_string.slice(e+1,my_string.length)
    }
    return my_string;
}
