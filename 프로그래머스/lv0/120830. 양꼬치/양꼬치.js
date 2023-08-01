function solution(n, k) {
    let lamb = 12000;
    let drink = 2000;
    
    return n > 10 ? lamb*n+drink*k-parseInt(n/10)*2000 : lamb*n+drink*k
}