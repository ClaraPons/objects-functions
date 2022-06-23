// // 01 - Object

// const cat = {
//     name: "Garfield",
//     age: 3,
//     isCute: true,
// }

// console.log(cat)
// console.log(cat.age)

// if (cat.isCute){
//     console.log("So cute !")
// }

// 02 - Combine

// const cat2 = {
//     name: "Felix",
//     age: 10,
//     isCute: false
// }

// let cats = [cat, cat2]

// console.log(cat.age)
// console.log(cat["age"])

// console.log(cat2.isCute)
// console.log(cat2["isCute"])

// 03 - Even

// const checkIfEven = (num) => {
//     if (num % 2 === 0){
//         return "even"
//     } else{
//         return "odd"
//     }
// }

// const result = checkIfEven(8)
// console.log(result)

// 04 - Compare

// const compare = (x,y) => {
//     if (x > y){
//         return "X is bigger"
//     } else{
//         return "Y is bigger"
//     }
// }

// const result = compare(10,60)
// console.log(result)

// 05 - Add Up

// const addUp = (num) => {
//     let add = 0
//     for (let i = 1; i <= num; i++){
//         add += i 
//     }
//     return add
// }

// const result = addUp(12)
// console.log(result)

// 06 - Time

// const format = (num) => {
//     let hours = Math.floor(num / 3600)  // une heure = 3600 sec
//     let minutes = Math.floor((num % 3600) / 60) 
//     // enlève une heure (3600) donc reste 100 a prendre pour les minutes 
//     // une minute = 60 sec
//     // donc prendre le reste de num et diviser par 60 
//     let sec = Math.floor(100 % 60)
//     // on enlève 60minutes pour prendre le reste en sec: 40 
//     //prendre le reste de 100 par rapport à 60 pour prendre les sec (1min = 60s)
//     return `${hours} : ${minutes} : ${sec}`
// }

// const result = format(3700)
// console.log(result)

// 07 - Password generation


const generatePassword = (num) => { 
    const min = 0
    const max = num

    const random = Math.floor(Math.random() * max) + min

}