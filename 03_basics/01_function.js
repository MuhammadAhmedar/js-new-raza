
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
 //  console.log(logginUserMessage("Ahmed"));

 function claculateCartPrice (val1, val2,...num1){
  return num1
 }
  // onsole.log(claculateCartPrice(200,300,2000,4000));
  const user ={
    username : "Ahmed",
    price : 199

  }
  function handleObject(anyobject) {
  //   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
   }
  handleObject(user)
  handleObject({
    username : "Raza",
    price : 399
  })
  const myNewArray = [200,300,4000,5000]
   
  function returnSecondValue(getArray) {
    return getArray[1]
  }
  // console.log(returnSecondValue(myNewArray));
  console.log(returnSecondValue([200,300,4000,5000]));