// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Abhinandan",
    "full name": "Abhinandan Kumar",
    [mySym]: "mykey1",
    age: 19,
    location: "Bihar",
    email: "abhi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
  }
  
  // console.log(JsUser.email);
  // console.log(JsUser["email"]);
  // console.log(JsUser["full name"]);
  // console.log(JsUser[mySym]);


  JsUser.email = "abhicpt.com"
  // Object.freeze(JsUser)
  JsUser.email = "abhicpr.com"
  // console.log(JsUser);

  JsUser.greeting = function() {
    console.log(`Hello JSuser`);
  }
  JsUser.greetingTwo = function() {
    console.log(`Hello JSuser, ${this.name}`);
  }

  console.log(JsUser.greeting());
  console.log(JsUser.greetingTwo());
