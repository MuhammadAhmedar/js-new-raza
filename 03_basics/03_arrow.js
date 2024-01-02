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

const program = () => {
    let username = "Ahmed"
    console.log(this.username);
}
program()