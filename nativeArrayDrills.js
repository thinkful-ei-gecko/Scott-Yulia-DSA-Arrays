function urlifyString(str) {
  return str.split(" ").join('%20'); // O(n)
  // strArr = strArr.filter(val => val !== ''); // O(n)
  // return strArr.join('%20'); // O(n)
};

console.log(urlifyString('www.thinkful.com /tauh ida parv een'));