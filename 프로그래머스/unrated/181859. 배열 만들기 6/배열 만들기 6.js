function solution(arr) {
    var stk = [];
    var i = 0;
    while(i < arr.length) {
        if(stk.legnth === 0) {
            stk.push(arr[i]);
            i += 1
        }else if(stk.length !== 0 && stk[stk.length-1] === arr[i]) {
            stk.pop();
            i+= 1
        }else{
            stk.push(arr[i])
            i+= 1 
        }
    } return stk.length ? stk : [-1]
    
}