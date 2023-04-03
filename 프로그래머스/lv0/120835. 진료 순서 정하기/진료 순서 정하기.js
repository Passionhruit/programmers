function solution(emergency) {
    var answer = []
    var array = [...emergency].sort((a,b) => b - a)
    for(i = 0; i < array.length; i++) { // array == [76, 24, 3]
        for(j = 0; j < emergency.length; j++) { // emergency == [3, 76, 24]
            if(array[j] == emergency[i]) {
                answer.push(j + 1)
            }
        }
    } return answer;
}