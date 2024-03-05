
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
console.log(loginuserMessage("Abhi"));