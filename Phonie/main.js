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

function validateNetwork(num) {
    if (num.startsWith('+') && num.length < 7) {
        clear()
    }
    if (num.length < 4) {
        clear()
    }
    if (unknownNetwork(num) == true) {
        testMaxDigits(num);
        warning.textContent = "Unknown network";
    }
    else {
        addGlow(num);
        testMaxDigits(num);
    }
}



function firstFourDigits(number) {
    if (countryCode(number) === false) {
        if (number.length >= 0 && number.length <= 4) {
            let digits = new RegExp('^' + number.substr(0, number.length)).exec(number);
            return digits[0]
        } else {
            let digits = /^\d{4}/.exec(number);
            return digits[0]
        }
    }else{
        return countryCode(number)
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
    if(num.startsWith('+')){
        if (num.length >= 7 && extractFromMap(num) === false) {
            return true
        }
        return false
    }
    if (num.length >= 4 && extractFromMap(num) === false){
        return true
    }
}

function testMaxDigits(num){
    if (num.startsWith('+2340') && num.length > 15) {
        clear()
        return warning.textContent = "Invalid number"
    } 
    if (!num.startsWith('+2340') && num.length > 14){
        clear()
        return warning.textContent = "Invalid number"
    } else if (num.length > 11 && !num.startsWith('+')) {
        clear()
        return warning.textContent = "Your number already exceeds 11 digits"
    }
    else {
        return warning.textContent = ""
    }
}


function addGlow(num){
    if (num.startsWith('+') && num.length >= 7) {
        extractFromMap(num).classList.add('glow')
    }
    if (num.length >= 4 && !num.startsWith('+')){
        extractFromMap(num).classList.add('glow')
    }
}




function clear() {
    all.forEach(e => e.classList.remove('glow'));
}

function countryCode(num) {
    let code = '+234';
    if (num.startsWith('+')){
        if (num.length > 0 && num.length < 7) {
            let digits = new RegExp("\\" + num.substr(0, num.length)).exec(num);
            return digits[0].slice(0, num.length)
        }
        if (num.length >= 7) {
            let digits = new RegExp("\\" + num.substr(0, num.length)).exec(num);
            let requiredDigits = digits[0].slice(code.length, 7);
            if (requiredDigits.startsWith('0')) {
                if (num.length === 7){
                    return
                }
                if (num.length >= 8) {
                    return digits[0].slice(code.length, 8)
                }
            } else if (!requiredDigits.startsWith('0')) {
                return '0' + requiredDigits
            }
        }
    }
    return false
}