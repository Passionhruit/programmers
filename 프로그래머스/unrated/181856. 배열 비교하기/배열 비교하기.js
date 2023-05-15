function solution(arr1, arr2) {
    var sum1 = 0;
    var sum2 = 0;
    
    if(arr1.length > arr2.length) {
        return 1
    }else if(arr1.length < arr2.length) {
        return -1
    }else {
        for(i = 0; i < arr1.length; i++) {
            sum1 += arr1[i]
            sum2 += arr2[i]
        }
        return sum1 > sum2 ? 1 : sum1 == sum2 ? 0 : -1
    }
}