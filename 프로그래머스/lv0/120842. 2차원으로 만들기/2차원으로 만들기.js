function solution(num_list, n) {
    let array=[];
    for(i=0; i<num_list.length; i++) {
        array.push(num_list.splice(i,n))
        i = i - 1;
    }
    return array;
}