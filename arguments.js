function addNum(num1, num2) {
  var sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    const num = arguments[i];
    sum = sum + num;
  }
  return sum;
}

var result = addNum(10, 12, 3, 4, 34);
console.log(result);
