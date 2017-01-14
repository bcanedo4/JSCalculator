var output = 0;
var screenContent = '';

document.getElementById("output-bar").addEventListener("input", function(){
	var inputValue = document.getElementById("output-bar").value;
    screenContent = inputValue;
});

document.getElementById("output-bar").addEventListener("keyup", function
	(event){
		event.preventDefault();
		if (event.keyCode == 13) {
			calculate();
		}
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