class Solution {
    public int solution(String message) {
        int count = 0;
        for(int i = 0; i < message.split("").length; i++) {
            count = count + 1;
        }
        return count * 2;
    }
}