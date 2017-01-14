var output = 0;
var screenContent = '';

// Waits for input from output-bar
document.getElementById("output-bar").addEventListener("input", function(){
	var inputValue = document.getElementById("output-bar").value;
	setOutputBar(filterInput(inputValue));
	screenContent = filterInput(inputValue);
});

// Checks for Enter button press on input bar
document.getElementById("output-bar").addEventListener("keyup", function
	(event){
		event.preventDefault();
		if (event.keyCode == 13) {
			calculate();
		}
	});

// Lets numbers be placed left to right
function putCharacter (character) {
	screenContent += character;
	setOutputBar(screenContent);
}

function setOutputBar (number) {
	document.getElementById('output-bar').value = number;
}

// Handles AC button
function clearOutputBox () {
	screenContent = '';
	document.getElementById('output-bar').value = screenContent;
}


function calculate () {
	// If eval receives invalid input, goes to catch
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

// Allows numbers and only symbols that are on the calculator
function filterInput (str) {

	// Removes letters and symbols
	if (str.match(/[a-z]/i) || str.match(/[`~!@#$%^&_|\=?;:'",<>\{\}\[\]\\]/gi, '')) {
    	str = str.replace(/[a-z]/,'');
    	str = str.replace(/([A-Z])/g, '');
    	str = str.replace(/[`~!@#$%^&_|\=?;:'",<>\{\}\[\]\\]/gi, '');
    	return str;
	} else {
		return str;
	}

}