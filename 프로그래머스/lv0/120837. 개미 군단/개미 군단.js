function solution(hp) {
    for(i=0; i<=hp; i++) {
        for(j=0; j<=hp; j++) {
            for(k=0; k<=hp; k++) {
                if(i+3*j+5*k === hp) {
                    return i+j+k
                }
            }
        }
    }
}