function solution(balls, share) {
    var ball = 1;
    var minimum = balls-share+1
    var shared = 1;
    for(i = minimum; i <= balls; i++) {
        ball = ball * i 
    } 
    
    for(i = 1; i <= share; i++) {
        shared = shared * i
    }
    
    return Math.round(ball/shared)
}