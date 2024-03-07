
function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}

const result = addTwoNumbers(3, 5)
 
// console.log("Result: ", result);



function loginuserMessage(username = "sam"){
    if (!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginuserMessage("Abhinandan"))
// console.log(loginuserMessage("Abhi"));


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500,1000))

const user = {
    username: "Abhi",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and pric is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "abhi",
    price: 399
})

const myNewArray = [200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 600, 500]));