function solution(a, b, c, d) {
    var dice = [a, b, c, d].sort((a,b)=> a-b)
    var [a,b,c,d] = dice
    const filtered = [...new Set(dice)] // 중복값 제거
    if(filtered.length === 1) { // 네 값이 같음
        return 1111 * a
    }else if(filtered.length == 4) { // 네 값이 다름
        return a
    }else if(filtered.length === 2 && b!==c ) { // 두 값씩 같음
        return (b+c)*Math.abs(b-c)
    }else if(filtered.length === 2 && b==c) { // 세 값 같고 하나 다름 
        if(a!==b) {
            return (10*b+a)**2
        }else{
            return (10*c+d)**2
        }
    }else{ // 두 값이 같고 두 값은 서로 다름
        if(a==b) {
            return c*d
        }else if(b==c) {
            return a*d
        }else{
            return a*b
        }
    }
}