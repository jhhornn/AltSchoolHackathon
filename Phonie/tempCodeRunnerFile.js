// console.log(validateNetwork('8076771953'))

// function firstFourDigits(number) {
//     if (number == '') {
//         number = '0'
//     }
//     if (number.length >= 0 && number.length <= 4){
//         let digits = new RegExp('^' + number.substr(0, number.length)).exec(number);
//         if (number.length != 4) {
//             return '0'
//         }else{
//             return digits[0]
//         }
//     }else{
//         let digits = /^\d{4}/.exec(number);
//         return digits
//     }
    
    
// }

// console.log(firstFourDigits(''))

// console.log(extractFromMap('0805'))

// function clear() {
//     for (let b of prefixes.values()){
//         if (b.classList.contains('glow')){
//             return b.classList.remove('glow')
//         }
//     }
// }
    



// for (let b of prefixes.values()) {
//     console.log(b.classList)
// }

// function firstFourDigits(number) {
//     let digits = /^\d{4}/.exec(number);
//     return digits[0]
// }

// for (let b of prefixes.values()) {
//     console.log(b)
// }

// console.log(prefixes)

// function firstFourDigits(number) {
   
//     let digits = new RegExp('^' + number.substr(0, number.length)).exec(number);
//     if (number.length == 4) {
//         return digits[0]
//      }
//     else {
//         let digits = /^\d{4}/.exec(number);
//         return digits[0]
//     }
// }

// function firstThreeDigits(number) {
//     let digits = /^\d{3}/.exec(number);
//     return '0' + digits[0]
// }

// function confirmDigits(number) {
//     if (number.toString().length == 11) {
//         return firstFourDigits(number)
//     } else if (number.toString().length == 10) {
//         return firstThreeDigits(number)
//     } else {
//         return 'Number incomplete'
//     }
// }

// function firstFourDigits(number) {
//     if (number.length >= 0 && number.length <= 4) {
//         if (number == '') {
//             number = '0'
//         }
//         let digits = new RegExp('^' + number.substr(0, number.length)).exec(number);
//         if (number.length != 4) {
//             return '0'
//         } else {
//             return digits[0]
//         }
//     } else {
//         let digits = /^\d{4}/.exec(number);
//         return digits[0]
//     }
// }





// console.log(firstFourDigits('0814'))










// let mtn = ['0803', '0806', '0703', '0706', '0813', '0816', '0810', '0814', '0903'];
// let glo = ['0805', '0807', '0705', '0815', '0811', '0905'];
// let airtel = ['0802', '0808', '0812', '0701', '0902', '0702'];
// let etisalat = ['0809', '0818', '0817', '0909'];
// let smile = ['0804', '0702']

// function convertMapKeysToArray(map){
//     let keyArray = []
//     for (let a of map.entries()) {
//         keyArray.push(a[0])
//     }
//     return keyArray
// }

// convertMapKeysToArray(prefixes).forEach(element => {
//     if (element.includes(firstFourDigits('08076771953'))){
//         console.log(prefixes.get(element))
//     }else{
//         console.log('no')
//     }
// });





// for (let a of prefixes.entries()) {
//     emptyArray.push(a[0])
//     // for(let i = 0; i < a[0].length; i++){
//     //     console.log(a[0][i])
//     // }
//     // if (a[0].includes()){}
// }
// console.log(convertMapKeysToArray(prefixes))

// console.log(prefixes.keys)