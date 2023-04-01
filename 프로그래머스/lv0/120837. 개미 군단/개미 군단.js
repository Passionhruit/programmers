function solution(hp) {
    for (i = 0; i <= hp; i++) {
        for(j = 0; j <= hp; j ++) {
            for (k = 0; k <= hp; k++) {
                if(hp == 5 * k + 3 * j + i) {
                    return k + j + i
                }
            }
        }   
    }
}