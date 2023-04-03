function solution(numbers) {
    var array = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    
    var num = numbers.split(""); 
    var num_array = []
    
    for(i = 0; i < num.length; i++) {
        for(j = 3; j <= 5; j++) {
            for (k = 0; k < array.length; k++) {
                if([...num].splice(i,j).join("") == array[k]) {
                    num_array.push(array.indexOf(array[k]))
                    i = i + 1;
                }
            }
        }
    } return parseInt(num_array.join(""));
}