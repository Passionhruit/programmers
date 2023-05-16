function solution(arr, queries) {
  const result = [];

  for (i = 0; i < queries.length; i++) {
    var [s, e, k] = queries[i];
    let min = -1;

    for (j = s; j <= e; j++) {
      if (arr[j] > k && (min === -1 || arr[j] < min)) {
        min = arr[j];
      }
    }

    result.push(min);
  }

  return result;
}