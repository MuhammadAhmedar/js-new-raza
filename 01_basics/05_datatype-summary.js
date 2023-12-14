//.  pirimitive

// 7 types: string, number, bolean, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.56

const isLognIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber =123456788976565318282n


//   Reference (Non pirimitive)

//  arry, objects, functions

const heros = ["superman","spiderman","batman"]

let myObj={
    name:"Ahmed",
    age : 26,
}
const myFunction =function(){
    console.log("hello world");
}