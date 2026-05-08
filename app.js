// 1
// const mostBig = (a, b, c) => {
//     if (a > b && a > c) {
//         return `kiritilgan ${a} soni katta barchasidan`
//     } else if (b > a && b > c) {
//         return `kiritilgan ${b} soni katta barchasidan`
//     }else  {
//         return `kiritilgan ${c} soni katta barchasidan`
//     }
// }

// console.log(mostBig(10, 40, 30));

// 2
// const isCouple = function (number) {
//     if (number % 2 !== 0) {
//         return false
//     } else {
//         return true
//     }
// }

// console.log(isCouple(22));

// 3
// const isKabisa = function (year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 400 === 0)) {
//         return `kiritilgan ${year} yil kabisa yili`
//     } else {
//         return `kiritilgan ${year} yil kabisa yili emas`
//     }
// }

// console.log(isKabisa(2026));

// 4
// const textReverse = (text) => {
//     let newText = ""
//     for (let i = text.length - 1; i >= 0; i--) {
//         newText += text[i]
//     }

//     return newText
// }
// console.log(textReverse("salom"));

// console.log(textReverse("saloom"));

// 5
// const countVowel = (text) => {
//     let counter = 0

//     for (let i of text) {
//         if ((i === "a" || i === "A") || (i === "e" || i === "E") || (i === "i" || i === "I") || (i === "o" || i === "O") || (i === "u" || i === "U")) {
//             counter++
//         }
//     }
//     return counter
// }


// console.log(countVowel("salom"));

// 6
// const massivSum = (array = []) => {
//     return array.reduce((acc, val) => acc + val)
// }
// const array = [10, 20, 40, 40]
// console.log(massivSum(array));

// 7
// const maxNumber = (massiv) => {
//     const sortArr = massiv.sort((a, b) => {
//         return b - a
//     })
//     return sortArr[0]
// }

// console.log(maxNumber([10, 40, 540, 40, 640]))

// 8
// const factorialN = (n) => {
//     let newValue = 1
//     for (let i = 1; i <= n; i++) {
//         newValue *= i
//     }
//     return newValue
// }
// console.log(factorialN(10));

// 9
// const ortaArifmetik = function(array = []) {
//     const arifmetikNumber = array.reduce((acc,val) => {
//         return acc + val
//     })
//     return arifmetikNumber / array.length
// }

// console.log(ortaArifmetik([10, 20, 40, 70]));

// 10d

//  12
// const sozSoni = (talk) => {
//     const talkArr = talk.split(" ").length
//     return talkArr

// }
// console.log(sozSoni("Hi my names Temur.My hobby is Coding. My work is frontend developer"));

// 13
// const customPow = function (number, degre) {
//     let res = 1
//     for (let i = 1; i <= degre; i++) {
//         res *= number
//     }
//     return res
// }
// console.log(customPow(2, 3));

// 14
// const engUzunSoz = (text) => {
//     const textArr = text.split(" ")
//     let engUzunSoz = textArr[0]

//     for (let i of textArr) {
//         if (engUzunSoz.length < i.length) {
//             engUzunSoz = i
//         } else if (engUzunSoz.length === i.length) {
//             engUzunSoz = engUzunSoz
//         }

//     }
//     return `this talk is most long (${engUzunSoz}) `
// }
// console.log(engUzunSoz("Temur dasturchi ehtimoliy ekan"));
// engUzunSoz("Temur dasturchi ekan")



// 15
// function bahoniAniqlash(ball) {
//     if (ball >= 90 && ball <= 100) {
//         return "A"
//     } else if (ball >= 80 && ball < 90) {
//         return "B"
//     } else if (ball >= 70 && ball <= 80) {
//         return "C"
//     } else if (ball >= 60 && ball <= 70) {
//         return "D"
//     } else {
//         return "you failed the exam !!!"
//     }
// }

// console.log(bahoniAniqlash(69));

// Massiv ichida berilgan son bor yoki yo‘qligini tekshiring.
// 16

// const inMassivNumber = (massiv, number) => {
//     for (let i of massiv) {
//         if (typeof number === "number") {
//             if (i === number) {
//                 return `siz kiritgan ${i} soni massiv ichida bor.`
//             } else {
//                 return "siz kirtigan son massiv ichida yuq"
//             }
//         } else {
//             return "siz kiritgan qiymat number bulishi shart"
//         }
//     }
// }

// console.log(inMassivNumber([10, 20, 40, 50, 80], 15));

// Matnda berilgan harf necha marta qatnashganini hisoblang.
// 17
// const harfSoni = (matn, harfi) => {
//     let counter = 0
//     for (let i = 0; i < matn.length; i++) {
//         if (matn[i].toLocaleLowerCase() === harfi.toLocaleLowerCase()) {
//             counter++
//         }
//     }
//     return `siz kiritgan matnda ${harfi} harfi ${counter} marta qatnashgan`
// }

// console.log(harfSoni("Temur + Bitta omadi kelgan qiz", "a"));

// Matndagi barcha bo‘sh joylarni olib tashlang.
// 18
// const removeSpace = text => text.split(" ").join("")

// console.log(removeSpace("salom dunyo bulishi mumkin"));

// 19
// Massivdagi barcha sonlarni 2 baravar oshirib yangi massiv qaytaring.
// const twoNumber = (array = []) => array.map((val) => { return val * 2 })

// console.log(twoNumber([10, 10, 40, 70, 80]));

// 20
// Gapdagi barcha harflar sonini hisoblang (space hisoblanmasin).

// const counterLatter = (gap) => {
//     let counter = 0
//     for (let i = 0; i < gap.length; i++) {
//         if (gap[i] !== " ") {
//             counter++
//         }
//     }
//     return counter
// }

// console.log(counterLatter("Temur dasturchi ekan"));
