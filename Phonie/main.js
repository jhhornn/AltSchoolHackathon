const mtn = document.querySelector('.mtn')
const glo = document.querySelector('.glo')
const etisalat = document.querySelector('.etisalat')
const airtel = document.querySelector('.airtel')
const all = document.querySelectorAll('.network-img')
const warning = document.querySelector('.warning')

const prefixes = new Map()

prefixes.set(['0803', '0806', '0703', '0706', '0813', '0816', '0810', '0814', '0903'], mtn)
prefixes.set(['0805', '0807', '0705', '0815', '0811', '0905'], glo)
prefixes.set(['0802', '0808', '0812', '0701', '0902', '0708', '0907', '0901'], airtel)
prefixes.set(['0809', '0818', '0817', '0909', '0908'], etisalat)
// prefixes.set(['0804', '0702'], 'smile')

const thePhoneNumber = document.querySelector('input')


thePhoneNumber.addEventListener('input', (e) => {
    if (e.target.value != null || e.target.value != undefined){
        validateNetwork(e.target.value)
    }
})



function firstFourDigits(number) {
    if (number.length >= 0 && number.length <= 4) {
        if (number == '' || number.length != 4) {
            number = '0'
        }
        let digits = new RegExp('^' + number.substr(0, number.length)).exec(number);
        return digits[0]
    } else {
        let digits = /^\d{4}/.exec(number);
        return digits[0]
    }
}

function extractFromMap(num){
    for (let a of prefixes.entries()) {
        if (a[0].includes(firstFourDigits(num))) {
             return a[1]
        }
    }
        return false
}

function unknownNetwork(num) {
    if (num.length >= 4 && extractFromMap(num) === false){
        return true
    }
}

function testElevenDigits(num){
    if (num.length > 11) {
        clear()
        return warning.textContent = "Your number already exceeds 11 digits" 
    }
    else {
        return warning.textContent = ""
    }
}

function addGlow(num){
    if (num.length >= 4){
        extractFromMap(num).classList.add('glow')
    }
}


function validateNetwork(num) {
    if(num.length < 4){
        clear()   
    }
    if (unknownNetwork(num)){
        testElevenDigits(num)
        warning.textContent = "Unknown network"
    }else {
        addGlow(num)
        testElevenDigits(num)
    } 
}

function clear() {
    all.forEach(e => e.classList.remove('glow'))
}

