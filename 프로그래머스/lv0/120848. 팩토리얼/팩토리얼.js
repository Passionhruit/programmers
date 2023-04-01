function solution(n) {
    var answer = 1
    
    for (i = 1; i <= 2310290194012 ; i++){
        answer = answer * i  
        if (answer > n) {
            return i-1;
        }
    } 
}