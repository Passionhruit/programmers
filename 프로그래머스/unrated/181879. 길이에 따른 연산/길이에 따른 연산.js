function solution(num_list) {
    var sum = 0;
    var mul = 1;
    for(i = 0; i < num_list.length; i++) {
        if(num_list.length > 10) {
            sum += num_list[i]
        }else {
            mul = mul * num_list[i]
        }
    } return num_list.length > 10 ? sum : mul
}