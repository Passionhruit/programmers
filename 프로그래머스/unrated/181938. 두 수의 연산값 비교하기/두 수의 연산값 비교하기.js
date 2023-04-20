function solution(a, b) {
    var sum = `${a}`+`${b}`
    var mul = 2*a*b
    
    if(sum >= mul) {
       return parseInt(sum)
    }else{
        return mul
    }
}