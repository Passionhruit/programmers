function solution(n, k) {
    let lamb = 12000
    let drink = 2000
    
    if(n>=10) {
        return 12000*n+drink*k-parseInt(n/10)*2000
    }else{
       return 12000*n+drink*k 
    }
}