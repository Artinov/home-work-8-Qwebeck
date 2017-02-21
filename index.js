
function setText(selector,text) {
	/*
		`selector` is string with CSS-like selector
		`text` - is just string with text we want to change
	*/
	// Write your code here
document.querySelector(selector).innerText = text

}



 function setTextAll(selector, text) {

document.querySelector(selector).innerText = text

}



setText("p", "wasn't that hard, yeah ?");
setTextAll("div .block a", "or was it ?");

