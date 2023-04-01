function solution(array) {
    var sum = 0
    var num = `${array}`.split("");
    for (i = 0; i < num.length; i++) {
        if(num[i] == "7") {
            sum = sum + 1
        }
    } return sum;
}