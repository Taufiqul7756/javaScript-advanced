function callback(name, age, task) {
  console.log("Hello,", name);
  console.log("Age", age);
  task();
}

function washHand() {
  console.log("washing Hand");
}
function takeShower() {
  console.log("Take a shower.");
}
function facebook() {
  console.log("Facebooking ....");
}

callback("Taufiq", 22, washHand);
callback("Tazwar", 23, takeShower);
callback("Saiful", 24, facebook);
