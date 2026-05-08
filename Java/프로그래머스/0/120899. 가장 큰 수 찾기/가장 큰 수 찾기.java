import java.util.Arrays;

class Solution {
    public int[] solution(int[] array) {
        // 임시 temp 배열 생성 
        int[] temp = array.clone();
        // answer 배열 생성
        int[] answer = new int[2];
        // max값 찾기 위해 array 배열 sort
        Arrays.sort(array);
        
        // index 찾기 위해 temp 배열 반복문 후 값 입력
        for(int i = 0; i < temp.length; i++) {
            if(temp[i] == array[array.length-1]) {
                answer[1] = i;
                break;
            }
        }
        answer[0] = array[array.length-1];
        
         return answer;
        
    }
}