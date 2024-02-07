const myNums =[1,2,3]

// const total = myNums.reduce (function (accumulator,currentValue) {
//     //console.log(`acc: ${accumulator} and currval ${currentValue}`);
//     return accumulator+currentValue
// }, 0 )

// const total = myNums.reduce((acc,currVal) => acc + currVal , 0 )
// console.log(total);


const shoppingChat = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "Mbl dev course",
        price: 5999
    },
    {
        itemName: "Swift course",
        price: 9999
    },
    {
        itemName: "Data Science course",
        price: 6999
    },
]

const PriceToPay = shoppingChat.reduce((acc, item) => acc + item.price, 0)  
console.log(PriceToPay);