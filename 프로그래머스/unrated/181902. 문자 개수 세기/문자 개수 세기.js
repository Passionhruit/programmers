function solution(my_string) {
    var sum = 0
    var answer = []
    var low = "abcdefghijklmnopqrstuvwxyz"
    var total = low.toUpperCase() + low
    
    for(i = 0; i < total.length; i++) {
        if(my_string.includes(total[i])) {
            for(j = 0; j < my_string.length; j++) {
                if(total[i] == my_string[j])
                    sum = sum + 1;
            }
            answer.push(sum)
            sum = 0;
        }else{
            answer.push(0)
        }
    }
    return answer
}