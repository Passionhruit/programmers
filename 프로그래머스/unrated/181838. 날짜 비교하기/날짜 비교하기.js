function solution(d1, d2) {
    for(i = 0; i < 3; i++) {
        if(d1[i] < d2[i]) {
            return 1
        }else if(d1[i] > d2[i]) {
            return 0
        }
    } return 0
}