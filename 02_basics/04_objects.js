// const tinderuser = new Object()
const tinderuser = {}

tinderuserId = "abc123"
tinderuser.name = "Sam"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUser ={
    email : "some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Ahmed",
            lastName: "Raza"
            
        }

    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "A",2: "B"}
const obj2 = {3: "C",4: "D"}
const obj3 = {5: "E",6: "F"}

// const obj4 = {obj1,obj2,obj3}
// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 ={...obj1,...obj2,...obj3}

// console.log(obj4);

const user =[
    {
        id:1,
        email: "ahmed@goggle.com"
    },
    {
        id:2,
        email: "ahmed2@goggle.com"
    },
    {
        id:3,
        email: "ahmed3@goggle.com"
    },
]

user [1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLogged'));