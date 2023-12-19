let myDate = new Date ()


// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatDate = new Date (2023, 0, 10)
// console.log(myCreatDate.toDateString());

let myCreatedDate = new Date (2023, 0, 10 , 5, 3)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate1 = new Date ("2023-01-14")
// console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatDate.getTime());
// console.log(Math.floor(Date.now() /1000));

let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());

newDate.toLocaleString('default',{
 weekday: "long"
})
console.log(newDate);