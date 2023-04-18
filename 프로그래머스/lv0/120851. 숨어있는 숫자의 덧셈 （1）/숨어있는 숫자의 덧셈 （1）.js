function solution(my_string) {
    var sum = 0;
    var array = my_string.split("");
    for(i = 0; i < array.length; i++) {
        if(parseInt(array[i]) == array[i]/1) {
            sum = sum + parseInt(array[i])
        }
    } return sum;
}