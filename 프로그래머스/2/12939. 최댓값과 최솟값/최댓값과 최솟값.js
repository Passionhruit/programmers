function solution(s) {
    const newArr = s.split(" ")
    const sortedArr = newArr.sort((a,b) => a - b)
    return sortedArr[0] + " " + sortedArr[sortedArr.length-1] 
}