// For

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`inner loop value: ${j} and inner loop ${i}`);
     //   console.log(i+ '*' + j + '=' + i*j);
        
    }
    
}
let myArry = ["Ahmed", "Abdullah", "Saqib"]
// console.log(myArry.length);
for (let i = 0; i < myArry.length; i++) {
    const element = myArry[i];
    // console.log(element);
    
}
// break and Continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`value of i is ${i}`);
    
// }
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${i}`);
    
}