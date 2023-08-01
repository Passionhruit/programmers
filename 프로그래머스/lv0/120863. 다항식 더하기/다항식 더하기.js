function solution(polynomial) {
    let a = []
    let b = []
    let x = 0;
    let other = 0;
    polynomial.split(" + ").filter((v)=>v.includes("x") ? a.push(v) : b.push(v));
    
    a = a.map((v) => v === "x" ? v = "1x" : v).join("").split("x")
    for(i=0; i <a.length; i++) {
        a[i]!== "" ? x = x+ +a[i] : null
    }
    
    for(i=0; i<b.length; i++) {
        other = other + +b[i]
    }
    
    if(other === 0 && x === 0) {
        return 0;
    }else if(x === 0 &&  other !== 0) {
        return `${other}`
    }else if(x !== 0 && other === 0) {
        if(x == 1) {
            return "x"
        }else {
            return `${x}x`
        }
    }else {
        if(x == 1) {
            return `x + ${other}`
        }else {
            return `${x}x + ${other}`
        }
    }
}