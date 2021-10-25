function evenOdd(num) {
  if (num % 2 == 0) {
    console.log(num, " : is even number");
  } else {
    console.log(num * 2, ": Converting odd to even");
  }
}

function evenOddForLoop(num) {
  for (let i = 0; i < num.length; i++) {
    var element = num[i];
    evenOdd(element);
  }
}

testnum = [4, 5, 7, 45, 46, 29, 0];
evenOddForLoop(testnum);

friends_age = [18, 19, 17, 20];
evenOddForLoop(friends_age);
