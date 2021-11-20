function doSomething() {
  console.log(3333);
}
console.log(2222);
// setTimeout(doSomething, 1000); //ms
// setTimeout(function () {
//   console.log("lazyy");
// }, 2000);

setInterval(() => {
  console.log("Iam lazzyyy");
}, 2000);
console.log(5555);

// ctrl c to stop terminal execution
