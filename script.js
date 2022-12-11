'use strict';
// === 1 ========= 1 dan 100 gacha sonlarni aylanib chiqing va son toq bo'lsa toq, juft bo'lsa juft deb chiqaring

// let numbers = +prompt('Son kiriting!', '100');
// for (let i=0; i <= numbers; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} soni juft`);
//     } else {
//         console.log(`${i} soni toq`);
//     }
// }

// ==== 2 ======== 1 dan 100 gacha sonlarni ichida 3 ga va 5 ga qoldiqsiz bo'linadiganlarini chiqaring.
// let sum = +prompt('Kayfiyatingizga qarab son kiriting😁!','100');
// for(let i=1; i<sum; i=i+1) {
//     if(i%3 ===0 || i%5 ===0) {
//         console.log(i)
//     }
// }


//=== 3. [23,56,4,78,5,63,45,210,56] massivdagi toq sonlarni chiqaring
//
// function myFunc() {
//     let mass = [23,56,4,78,5,63,45,210,56];
//     for (let i=0; i<mass.length; i++) {
//         let sum = mass[i];
//         if (sum%2==1) {
//             console.log(sum);
//         } else{
//             console.log('bu son toq emas!')
//         }
//     }
// }
// myFunc()

// ===4. input (textarea)ga kiritilgan gan so'zlari sonini chiqaradigan dastur yozing

// function find() {
//     let text = document.getElementById('text').value;
//
//     let myArr = text.split(" ");
//
//     for (let i=0; i<myArr.length; i=i+1) {
//         console.log([i]+ " "+myArr[i]);
//         document.getElementById('p').innerHTML = "Textmizdagi  so'zlar soni " + myArr.length + ' ga teng!';
//
//     }
// }
// find();

// == 5. == Dastur foydalanuvchidan 5 ta o'quvchining ismini so'rasin va Abdu yoki gul bilan boshlanadigan ismlarni consolega chiqarsin.

// let names = prompt('5ta ismlarni kiriting! va console.log() ga qarang!').split(' ');
//
// for (let i=0; i<names.length; i++) {
//     let name = names[i];
//     let ism_1 = name.includes("Abdu");
//     let ism_2 = name.includes('Gul');
//     if (ism_1 || ism_2) {
//         console.log(name);
//     }  else {
//         console.log('Siz kiritgan ismlar Gul va Abdu sozlari mavjud emas☹!')
//     }
// }

////////////////////////////////// Qo'shimcha:

//  1. 1 dan 100 gacha fibonachchi sonlarini chiqarish dasturini chiqaring.
// Fibonachchi sonlari keyingi son oldingi 2 tasining yig'indisiga teng: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...

// let myArray = 100;
for (let i=1; i<=100; i++){

    console.log(sum);
}