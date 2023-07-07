function solution(d1, d2) {
    if(d1[0] > d2[0]) {
        return 0
    }else if (d1[0] < d2[0]) {
        return 1
    }else if (d1[1] > d2[1]) {
        return 0
    }else if (d1[1] < d2[1]) {
        return 1
    }else if (d1[2] > d2[2]) {
        return 0
    }else if (d1[2] < d2[2]){
        return 1 
    }else {
        return 0
    }
}