function solution(brown, yellow) {
    for(i = 0; i <= yellow; i++) {
        for(j = 0; j <= yellow; j++) {
            if(i*j == yellow && 2*(i+j)+4 == brown) {
                return [j+2,i+2]
            } 
        }
    }
}