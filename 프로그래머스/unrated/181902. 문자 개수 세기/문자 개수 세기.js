function solution(my_string) {
    var sum = 0
    var answer = []
    var low = "abcdefghijklmnopqrstuvwxyz"
    var up = low.toUpperCase()
    for(i = 0; i < up.length; i++) {
        if(my_string.includes(up[i])) {
            for(j = 0; j < my_string.length; j++) {
                if(up[i] == my_string[j])
                    sum = sum + 1;
            }
            answer.push(sum)
            sum = 0;
        }else{
            answer.push(0)
        }
    }
    
    for(i = 0; i < low.length; i++) {
        if(my_string.includes(low[i])) {
            for(j = 0; j < my_string.length; j++) {
                if(low[i] == my_string[j])
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