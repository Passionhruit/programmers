function solution(arr1, arr2) {
    var len1 = arr1.length;
    var len2 = arr2.length;
    var sum1 = 0
    var sum2 = 0
    
    for(i = 0; i < len1; i++) {
        sum1 += arr1[i]
    }
    
    for(i = 0; i < len2; i++) {
        sum2 += arr2[i]
    }
        
    if(len1 > len2) {
        return 1
    }else if (len2 > len1){
        return -1
    }else if(sum1 > sum2) {
        return 1
    }else if(sum2 > sum1) {
        return -1
    }else {
        return 0
    }
    
}