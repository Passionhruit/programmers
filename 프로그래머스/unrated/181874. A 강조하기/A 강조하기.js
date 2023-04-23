function solution(myString) {
    var array = myString.split("");
    for(i = 0; i < array.length; i++) {
        if(array[i] == "a" || array[i] == "A") {
            array[i] = "A"
        }else{
            array[i] = array[i].toLowerCase();
        }
    } return array.join("")
}