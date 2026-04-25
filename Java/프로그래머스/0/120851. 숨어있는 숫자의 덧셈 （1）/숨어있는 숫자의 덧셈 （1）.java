class Solution {
    public int solution(String my_string) {
        int count = 0;
        String[] result = my_string.replaceAll("[^0-9]", "").split("");
        
        for(String str: result) {
            count = count + Integer.parseInt(str);
        }
        
        return count;
    }
}