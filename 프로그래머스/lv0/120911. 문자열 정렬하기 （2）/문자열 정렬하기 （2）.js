function solution(my_string) {
    var lowercase = my_string.toLowerCase();
    var array = lowercase.split("");
    
    return array.sort().join("");
    
}