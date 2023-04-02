function solution(order) {
    var sum = 0;
    var array = `${order}`.split("")
    for (i = 0; i < array.length; i++){
        if(array[i] == "3" || array[i] == "6" || array[i] == "9") {
            sum = sum + 1
        }
    } return sum;
}