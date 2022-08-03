let num1;
let num2;
let result;
let resultField;

let opNum;

function loadDoc() {
	resultField = document.getElementById("result");
	result = 0;
}

function add() {
	opNum = 1;
}

function sub() {
	opNum = 2;
}

function mul() {
	opNum = 3;
}

function div() {
	opNum = 4;
}

function solve() {
	num1 = Number(document.getElementById("num1").value);
	num2 = Number(document.getElementById("num2").value);	
	
	switch(opNum) {
		case 1:
			result = num1 + num2;
			break;

		case 2:
			result = num1 - num2;
			break;

		case 3:
			result = num1 * num2;
			break;

		case 4:
			result = num1 / num2;
			result = result.toFixed(5);
			break;
	}

	if (isNaN(result)) {
		result = 0;
	}

	updateResult();
}

function updateResult() {
	resultField.textContent = result;
}