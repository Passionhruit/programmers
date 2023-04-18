function solution(my_string) {
    var array = my_string.split("");
    var num = [];
    var sum = 0;
    for(i = 0; i < array.length; i++) {
        if(parseInt(array[i]) == array[i]*1) {
            num.push(array[i])
        }else {
            num.push(" ")
        }
    } 
    var num_list = num.join("").split(" ")
    for(i = 0; i < num_list.length; i++) {
        if(Number (num_list[i])) {
            sum = sum + parseInt(num_list[i])
        }
    } return sum;
}