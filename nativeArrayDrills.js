function urlifyString(str) {
  return str.split(" ").join('%20'); // O(n)
};

// console.log(urlifyString('www.thinkful.com /tauh ida parv een'));

function filter(arr) {
  // for (let i = 0; i< arr.length; i++) { //O(n)
  //   if (arr[i] < 5) { //O(1)
  //     arr.splice(i, 1); //O(n)
  //   }

  // }
  // return arr;

  let newArr = []; //0(1)
  for (let i = 0; i< arr.length; i++) { //O(n)
    if (arr[i] >= 5) {
      newArr.push(arr[i]); //O(1)
    }
  }
  return newArr;
} 

//console.log(filter([1, 6, 2, 8, 9]));

function maxSum(arr) {
  let sum = 0;
  let currentSum = 0;
  for (let i=0; i<arr.length; i++) {
    currentSum += arr[i];
    if (sum < currentSum) {
      sum = currentSum;
    }

  }
  return sum;
}

console.log(maxSum([-4, 6, 3, 5, -2, -1, -10, 14, 12]));