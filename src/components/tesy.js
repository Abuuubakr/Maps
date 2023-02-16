// let ar = [1, 2, 1, 3, 4, 2, 3];
// for(let i = 0; i < ar.length; i++){
//     for(let j = i + 1; j < ar.length; j++){
//         if(ar[i] == ar[j]){
//             console.log(ar[i]);
//         }
//     }
// }

// function solve(ar){
//     let z = 0;
//     let a;
//     let obj = {}
//     for(let i = 0; i < ar.length; i++){
//         a = ar.filter((a, b) => a === ar[i])
//         obj = {
//             ...obj,
//             [ar[i]] : a.length
//         }
//     }
//     return obj;
// }
// console.log(solve([1, 2, 1, 2, 1, 2, true, false]));

// let str = "LrKuuuSEHsOOOtGGeeeeex"
// console.log(str.split("").filter((e, i) => e == e.toLowerCase()).join(""));


// let objects = [
//     {
//         id : "1",
//         createdAt : "2020-3-20"
//     },
//     {
//         id : "2",
//         createdAt : "2019-5-11"
//     },
//     {
//         id : "3",
//         createdAt : "2021-7-2"
//     },
//     {
//         id : "4",
//         createdAt : "2020-4-28"
//     }
// ]


// function get(a, b){
//     return Math.abs(a-b)/(3600000*24)
// }
// console.log(get((new Date("December 29, 2019")), (new Date("January 1, 2020"))));

// function convert(cm){
//     // let foot = (cm/30.48);
//     let inch = (cm/30.48) * 12;
//     let foot = inch / 12
//     let inch2 = inch % 12
//     return `${cm} centimeters = ${Math.floor(foot)} feet and ${inch2} inches`
// }
// console.log(convert(180));

function Week(date){
    let ar = [];
    let data = new Date(date)
    let id = data.getDate()
    
}
console.log(Week('11-02-2020'))

