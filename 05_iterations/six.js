// const coding = ["js","java","py","cpp","ruby"]

// const value = coding.forEach((item)=>{
// // console.log(item);
// return item
// })
// console.log(value);

const myNums =[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=>{
//      return num > 4
// })

// console.log(newNums);
 
// const newNums = []
// myNums.forEach((num)=>{
// if (num > 4 ) {
//     newNums.push(num)
// }
// })
// console.log(newNums);

const Book = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2006 },
    {title: 'Book Two', genre: 'History', publish: 1987, edition: 2008 },
    {title: 'Book Three', genre: 'Science', publish: 1990, edition: 2014 },
    {title: 'Book Four', genre: 'Physics', publish: 1995, edition: 20016 },
    {title: 'Book Five', genre: 'Biology', publish: 1997, edition: 2018 },
    {title: 'Book Six', genre: 'History', publish: 2000, edition: 2020 },
    {title: 'Book Seven', genre: 'Phycolygy', publish: 2001, edition: 2023 },
    {title: 'Book Eight', genre: 'Startups', publish: 2004, edition: 2024 },
]

let userBook =Book.filter((bk) => bk.genre ==='History')

userBook =Book.filter((bk) => {
    return bk.publish >= 1981 && bk.edition >= 2014
})

console.log(userBook);