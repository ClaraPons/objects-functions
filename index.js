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

// console.log(cats[0].age)
// console.log(cats[0]["age"])

// console.log(cats[1].isCute)

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
//         return "${x} is bigger"
//     } else if (y > x){
//         return "${y} is bigger"
//     } else{
//          return "Both are the same"
//  }
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
// let secondsInHour = 3600    
// let hours = Math.floor(num / secondsInHour)  
// une heure = 3600 sec
//     let minutes = Math.floor((num % secondsInHour) / 60) 
// enlève une heure (3600) donc reste 100 a prendre pour les minutes 
// une minute = 60 sec
// donc prendre le reste de num et diviser par 60 
//     let sec = Math.floor((num % secondsInHour) % 60)
// on enlève 60minutes pour prendre le reste en sec: 40 
// prendre le reste de 100 par rapport à 60 pour prendre les sec (1min = 60s)
//     return `${hours} : ${minutes} : ${sec}`
// }

// const result = format(3700)
// console.log(result)

// 07 - Password generation

// let array = []
// let letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]


// const generatePassword = (num) => { 

//     if (num < 6 || num > 15){
//         console.log("error")
//     } else {
//         for (let i = 0; i < num; i++){
//         const min = 0
//         const max = letter.length
//         const random = Math.floor(Math.random() * max) + min
//         array[i] = letter[random] 
       
//     }
//     return  array.join("")
// }
// }

//  console.log(generatePassword(7))

// AUTRE METHODE

// const generatePasword = num => {
//     let password = ""
    
//     if (num < 6 || num > 15){
//         console.log("error")
//     } else {
//     for (let i = 0; i < num ; i++){
//         const min = 65
//         const max = 90 - min + 1
//         const random = Math.floor(Math.random() * max) + min
//         password += String.fromCharCode(random)
//     }
//     console.log(password)
// }

// generatePasword(8)


// 08 - Let’s play

// const launchDice = (numberOfDice) => {
//     let sum = 0 
//     for(let i = 0; i < numberOfDice; i++){
//         const min = 1
//         const max = 6
//         const random = Math.floor(Math.random() * max) + min
//         sum += random
//     }
//     return sum
// }

// let player1 = launchDice(5)
// let player2 = launchDice(5)

// console.log(player1)
// console.log(player2)

// if (player1 > player2){
//     console.log(`Player 1 is the winner ! score : ${player1}`)
// }else if (player2 > player1){
//     console.log(`Player 2 is the winner ! score : ${player2}`)
// }else{
//     console.log('There is no winner')
// }