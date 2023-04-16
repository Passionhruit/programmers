function solution(s) {
    var word = s.split(" ");
    var answer = [];
    for(i = 0; i < word.length; i++) {
        for(j = 0; j < word[i].length; j++) {
            if(j % 2 == 0) {
                answer.push(word[i][j].toUpperCase());
            }else{
                answer.push(word[i][j].toLowerCase());
            }
        }
        answer.push(" ")
    } answer.pop();
        return answer.join("");
}