function solution(balls, share) {
    let ball = 1;
    let shared = 1;
    let nm = 1;
    
    for(i=1; i<=balls; i++) {
        ball = ball * i
    }
    for(i=1; i<=share; i++) {
        shared = shared * i
    }
    for(i=1; i<=(balls-share); i++) {
        nm = nm * i
    }
    return Math.round(ball/(shared*nm))
}