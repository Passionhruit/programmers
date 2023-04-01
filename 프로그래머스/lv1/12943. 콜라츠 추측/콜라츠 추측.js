function solution(num) {
    for (i = 0; i <= 500; i++) {
        if ((num % 2 == 0) && (num !== 1)) {
            num = num / 2
        }else if ((num % 2 == 1) && (num !== 1)){
            num = num * 3 + 1
        }else if (num == 1) {
            return i 
        } 
    } return -1
}