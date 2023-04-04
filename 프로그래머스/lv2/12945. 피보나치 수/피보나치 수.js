function solution(n) {
    var previous = 0;
    var current = 1;
       
    for (i = 1; i <= n; i++) {
        var answer = current % 1234567
        var temp = previous % 1234567 ;
        previous = current % 1234567;
        current = current + temp % 1234567;
    }  return answer % 1234567;
}