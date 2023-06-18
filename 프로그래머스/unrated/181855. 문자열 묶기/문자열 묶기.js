function solution(strArr) {
    let nums = strArr.map((v)=> v = v.length)
    let count = {}
    for(let num of nums) {
        if(num in count) {
            count[num] += 1
        }else{
            count[num] = 1
        }    
    }
    
    let max_num = 0
    let answer = [];
    
    for(let num in count) {
        if(count[num] > max_num) {
            max_num = count[num]
            answer = count[num]
        }
    } return answer
}