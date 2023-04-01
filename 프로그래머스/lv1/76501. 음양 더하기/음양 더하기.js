function solution(absolutes, signs) {
    var sum = 0;
    for (i = 0; i < absolutes.length; i++) {
        if (signs[i]) {
            sum = sum + absolutes[i]
        } else {
            sum = sum - absolutes[i]
        }
    } return sum;
}