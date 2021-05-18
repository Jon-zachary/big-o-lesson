const nums = [2, 4, 6, 8, 10];

function binary(item, arr) {
  let low = 0;
  let high = arr.length;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];
    if (item === guess) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return 'not found';
}

const num = binary(8, nums);
console.log(num);
