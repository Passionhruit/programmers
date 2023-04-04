function solution(s) {
    var sum = 0;
    var array = s.split(" ");
    for (i = 0; i < array.length; i++) {
        if(array[i+1] !== "Z" && array[i] !== "Z") {
            sum = sum + parseInt(array[i])
        }
    } return sum;
}