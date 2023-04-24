function solution(strArr) {
    for(i = 0; i < strArr.length; i++) {
        i % 2 == 1 ? strArr[i] = strArr[i].toUpperCase() : strArr[i] = strArr[i].toLowerCase()
    } return strArr
}