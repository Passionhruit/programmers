function solution(arr, flag) {
    var X = [];
    for(i = 0; i < flag.length; i++) {
        if (flag[i]) {
            for(j = 0; j < arr[i]*2; j++) {
                X.push(arr[i])
            }
        }else {
            X.splice(-arr[i])
        }
    }
    return X;
}