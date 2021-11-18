var name = "Kuddus"; //Global variable . we can use both inside and outside

function add(num1, num2) {
  var result = num1 + num2;
  console.log("Name inside:", name);
  return result;
}
var sum = add(10, 12);
console.log(sum);
console.log("Name outside:", name);
