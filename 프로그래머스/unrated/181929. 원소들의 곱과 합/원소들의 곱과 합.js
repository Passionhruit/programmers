function solution(num_list) {
    var mul = 1;
    var sum = 0;
    for(i = 0; i < num_list.length; i++) {
        mul = mul * num_list[i]
        sum = sum + num_list[i]
    }
    return mul > sum*sum ? 0 : 1;
}