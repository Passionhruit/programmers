class Solution {
    public String solution(String my_string, int n) {
        String[] arr = my_string.split("");
        String answer = "";
        for(String str : arr) {
            answer = answer + str.repeat(n);
        }
        return answer;
    }
}