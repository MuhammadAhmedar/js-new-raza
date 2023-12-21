//  singleton

// object literals

const mysym = Symbol ("key1")

const jsUser = {
    [mysym] : "mykey1",
    "full Name" : "Ahmed Raza",
    name : "Ahmed",
    Age : 26,
    location : "karachi",
    email : "raza68600@gamil.com",
    isLoggedIn : false,
    lastLoggedInDay : ["Monday","Teusday",]


}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]);
// console.log(jsUser[mysym]);

jsUser.email = "ahmed@google.com"
// Object.freeze(jsUser)
jsUser.email = "raza@google.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());