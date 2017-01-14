var output = 0;
var screenContent = '';

document.getElementById("button-1").addEventListener("click", function(){

});

function putCharacter (character) {
	screenContent += character;
	setOutputBar(screenContent);
}

function setOutputBar (number) {
	document.getElementById('output-bar').value = number;
}

function clearOutputBox () {
	screenContent = '';
	document.getElementById('output-bar').value = screenContent;
}

function calculate () {
	var calculation = eval(screenContent);
	setOutputBar(calculation);
	screenContent = calculation; 
}