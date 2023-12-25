
function sayMyName(){
    console.log("A");
    console.log("h");
    console.log("m");
    console.log("e");
    console.log("d");

}

 // sayMyName()  
 
//  function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
  function addTwoNumbers(number1, number2){
    // let result = number1+number2
    // return result
    // console.log("Ahmed"); // AAfter retun not executed Any other console //
    return number1+number2
}
const result = addTwoNumbers(3, 5)

// console.log("result",result);

function logginUserMessage(username = "raza") {
  if (!username) {
    console.log("Pleace enter a user name");
    return
  }
  return`${username} Just Logged In`
  }
  console.log(logginUserMessage("Ahmed"));