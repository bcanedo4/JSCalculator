var output = 0;
var screenContent = '';

document.getElementById("output-bar").addEventListener("input", function(){
	var inputValue = document.getElementById("output-bar").value;
	setOutputBar(checkForLetters(inputValue));
	screenContent = checkForLetters(inputValue);
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
	try {
		var calculation = eval(screenContent);
		if (!(calculation === undefined)){
			setOutputBar(calculation);
			screenContent = calculation; 
		} else {
			alert('Invalid Input');
			alert(calculation);
		}
	} catch(e) {
		if (e instanceof SyntaxError) {
			alert('Invalid Input');
		}
	}

}

function checkForLetters (str) {

	// Removes letters and symbols
	if (str.match(/[a-z]/i) || str.match(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\]/gi, '')) {
    	str = str.replace(/[a-z]/,'');
    	str = str.replace(/([A-Z])/g, '');
    	str = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\]/gi, '');
    	return str;
	} else {
		return str;
	}

}