const coding = ["js","java","py","cpp","ruby"]

// coding.forEach(function(value) {
//     console.log(value);
// })
// coding.forEach((val) => {
//     console.log(val);
// })

// function Printme(item) {
//     console.log(item);
// }
// coding.forEach(Printme)

// coding.forEach( (item,index,arr)=>{
// console.log(item,index,arr);
// })

const myCoding =[
    {
        LanguageName: "javaScript",
        languageFileName: "js"
    },
    {
        LanguageName: "java",
        languageFileName: "java"
    },
    {
        LanguageName: "python",
        languageFileName: "py"
    },
    
]
myCoding.forEach((item)=>{
console.log(item.languageFileName);
})