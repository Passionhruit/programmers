function solution(n) {
    var odd = 0;
    var even = 0;
    
    for(i = 1; i <= n; i++) {
        if(i % 2 == 1) {
            odd = odd + i
        }else {
            even = even + i*i
        }
    } return n % 2 == 1 ? odd : even
}