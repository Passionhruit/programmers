function solution(s) {
    let init = s;
    let frequency = 0;
    let zero = 0;
    
    while(init !== "1") {
        let array = init.split("")
        let zeroNum = array.filter((v) => v === "0").length;
        let first = init.split("0").join("").length;
        let second = first.toString(2)
        
        frequency += 1;  
        zero += zeroNum;
        init = second;
    }
        return [frequency, zero]

}