const user = {
    username : "Ahmed",
    price : 999,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome To Website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "Raza"
// user.welcomeMessage()

//  console.log(this);
 
// function program() {
//     let username = "Ahmed"
//     console.log(this.username);
// }
// program()

// const program = function () {
//     let username = "Ahmed"
//     console.log(this.username);
// }
// program()

// const program = () => {
//     let username = "Ahmed"
//     console.log(this.username);
// }
// program()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }
 
// const addtwo =(num1, num2) => num1 + num2

// const addtwo =(num1, num2) =>(num1 + num2) 
const addtwo =(num1, num2) =>({username : "Ahmed"}) 

console.log(addtwo(3, 4));