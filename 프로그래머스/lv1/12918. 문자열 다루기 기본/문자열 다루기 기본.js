function solution(s) {
    for(i = 0; i < s.length; i++) {
        if(s[i] == "e") {
            return false;
        }
    }
    
    if(s.length == 4 || s.length == 6) {
        return s/1 == s-"0" ? true : false;
    } else {
        return false;
    }
}