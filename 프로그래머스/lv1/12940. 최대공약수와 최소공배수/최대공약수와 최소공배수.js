function solution(n, m) {
    var array = [];
    var array2 = [];
    for(i = 1; i <= m; i ++) {
        if(n%i == 0 && m%i == 0) {
            array.push(i) // i 의 마지막값
        }
    } 
    
    for(i = n; i <= n*m; i++) {
        if(i%n == 0 && i%m == 0) {
            array2.push(i) // i 의 첫번째 값
        }
    }
    return [array[array.length-1],array2[0]]
}