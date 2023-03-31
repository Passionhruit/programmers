function solution(a, b) {
    var sum = 0;
    var num = 0;
    
    if (a <= b) {
        for(i = a; i <= b; i ++) {
            sum = sum + i
        } return sum;
    } else {
       for (i = b; i <= a; i ++) {
            num = num + i
        } return num;
    }
}