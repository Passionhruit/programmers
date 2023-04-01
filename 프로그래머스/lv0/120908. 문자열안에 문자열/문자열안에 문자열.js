/*
function solution(str1, str2) {
    var array = str1.split(""); // 배열
    
    for (i = 0; i < array.length; i++) {
        if(array.slice(i, i + str2.length).join("") == str2) {
           return 1;
        }
    }   return 2;
}

function solution(str1, str2) {
    return str1.indexOf(str2) === -1 ? 2 : 1;
}

*/

function solution(str1, str2) {
    return str1.match(str2) ? 1 : 2;
}



