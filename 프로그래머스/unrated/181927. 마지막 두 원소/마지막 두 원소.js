function solution(num_list) {
    var last = num_list[num_list.length-1];
    var secLast = num_list[num_list.length-2];
    
    last > secLast ? num_list.push(last-secLast) : num_list.push(last*2)
    return num_list
}