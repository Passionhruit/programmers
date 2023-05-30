function solution(n) {
    var num = 0
    for(i = 0; i < n.length; i++) {
        while(n[i] !== 1) {
            if(n[i] % 2 == 0) {
                num = num + 1
                n[i] = n[i]/2
            }else if(n[i] % 2 == 1){
                num = num + 1
                n[i] = (n[i]-1)/2
            }
        }
    } return num
}