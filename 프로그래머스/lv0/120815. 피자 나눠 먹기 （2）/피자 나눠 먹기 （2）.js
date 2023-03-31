function solution(n) {
    // n(사람) * i(피자판) * 6 = 피자 조각 수
    // 
    
    for (i = 1; i <= n*6; i ++) {
        if ((6 * i) % n == 0) {
            return i
        }
    }
}