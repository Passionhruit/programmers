function solution(arr) {
    if(arr[0].length === arr.length) {
        return arr
    }else if(arr[0].length > arr.length) {
        while(arr[0].length !== arr.length) {
            arr.push(Array(arr[0].length).fill(0))
        } return arr
    }else {
        while(arr[arr.length-1].length !== arr.length) {
            for(i = 0; i < arr.length; i++) {
                arr[i].push(0)
            }
        } return arr
    }
}