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

function maxSum(arr) { // O(n^2)
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let total = arr[i];
    for(let j = i + 1; j < arr.length; j++) {
      total += arr[j];

      if (total > sum) {
        sum = total
      }
    }
  }
  return sum;


  // let sum = 0;
  // let currentSum = 0;
  // for (let i=0; i<arr.length; i++) {
  //   currentSum += arr[i];
  //   if (sum < currentSum) {
  //     sum = currentSum;
  //   }

  // }
  // return sum;
}
// console.log(maxSum([4, 6, -3, 5, -2, 1]));
// console.log(maxSum([-4, 6, 3, 5, -2, -1, -10, 14, 12]));

function mergeArrays(arr1, arr2) {
  let merged = [...arr1, ...arr2]; //O(n)
  merged.sort((a, b) => a - b); //O(n^2) || best case O(log(n))
  
  return merged;
}

//console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

function removeCharacters(str) {
  let initStr = '';
  return str.replace(/[aeiou]/ig, ''); //O(n)
}
//console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

function products(arr) {
  let total = arr.reduce((a, b) => a * b);
  let products = [];
  arr.forEach(val => products.push(total/val))
  return products;
}

console.log(products([1, 3, 9, 4, 10]))