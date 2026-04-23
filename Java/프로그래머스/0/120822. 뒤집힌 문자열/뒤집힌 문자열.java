class Solution {
    public String solution(String my_string) {
        String[] arr = my_string.split("");
        String[] newArr = new String[arr.length];
        for (int i = 0; i <= arr.length - 1; i++) {
            newArr[i] = arr[arr.length - 1 -i];
        }
        return String.join("", newArr);
    }
}