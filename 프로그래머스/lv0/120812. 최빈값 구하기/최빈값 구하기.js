function solution(nums) {
    var count = {};
    for(let num of nums) {
        if(num in count) {
            count[num] += 1
        }else {
            count[num] = 1
        }
    }
    
    let max_num = 0
    let answer = [];
    
    for(let num in count) {
        if(count[num] > max_num) {
            max_num = count[num]
            answer = [num]
        }else if(count[num] === max_num) {
            answer.push(count[num])
        }
    } 
    
    return answer.length !== 1 ? -1 : parseInt(answer[0])
}