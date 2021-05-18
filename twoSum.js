function twoSum(arr, target) {
  const hash = {};
  const results = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (hash[target - arr[i]]) {
      results.push([arr[i], target - arr[i]]);
    } else {
      hash[arr[i]] = target - arr[i];
    }
  }
  return results;
}


function slowTwoSum(arr, target) {
  const res = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === target) {
        res.push([arr[i], arr[j]]);
      }
    }
  }
  return res;
}

console.log(twoSum([1, 2, 3, 4, 5], 5));
