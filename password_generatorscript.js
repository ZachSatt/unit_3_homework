let lengthEl = document.querySelector("#length");
let uppercaseEl = document.querySelector("#uppercase");
let lowercaseEl = document.querySelector("#lowercase");
let numbersEl = document.querySelector("#numbers");
let symbolsEl = document.querySelector("#symbols");
let generatePwb = document.querySelector("#generatePwb");
let resultEl = document.querySelector("#result");

let randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

generatePwb.addEventListener("click", () => {
	let length = +lengthEl.value;
	let hasLower = lowercaseEl.checked;
	let hasUpper = uppercaseEl.checked;
	let hasNumber = numbersEl.checked;
	let hasSymbol = symbolsEl.checked;
	
	resultEl = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	let typesCount = lower + upper + number + symbol;
	let typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// No type
	if(typesCount === 0) {
		return " ";
    }
    
	
	// create a loop to put here
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			let funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	let finalPassword = generatedPassword.slice(0, length);
	
    return window.alert(finalPassword);
    
    
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	let symbols = "!@#$%^&*(){}[]=<>/,.";
	return symbols[Math.floor(Math.random() * symbols.length)];
}
