//   for of

// [" "," "," "]
// {}, {}, {}

// const number = [1,2,3,4,5]

// for (const num of number) {
//     //console.log(num);
// }
// const greetings = "hello world!"

// for (const greet of greetings) {
//     console.log(`Each charecter is ${greet}`);
// }

//    Maps

const map = new Map()
map.set ('pk',"Pakistan")
map.set ('in',"India")
map.set ('ch',"China")
map.set ('af',"Afganistan")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,'=',value);
}

const myObject = {
    'game1' : 'MARIO',
    'game2' : 'NFS'
}
for (const [key, value] of myObject) {
    console.log(key,'=',value);
}