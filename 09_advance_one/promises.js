const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is compelete");
  }, 1000);
  resolve()
});

promiseOne.then(function () {
  console.log("Promise consumed");
});


new Promise(function(resolve, reject) {
  setInterval(function(){
    console.log("Async task 2");
    resolve()
  }, 1000)
}).then(function(){
  console.log("Async 2 resolved");
}) 

const promiseThree = new Promise(function(resolve, reject) {
  
})