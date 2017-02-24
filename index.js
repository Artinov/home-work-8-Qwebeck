
function setText(selector,text) {
	
		// `selector` is string with CSS-like selector
		// `text` - is just string with text we want to change
	
	// Write your code here
var element = document.querySelector(selector)
element.innerText = text

}

function setTextAll(selector,text) {
		
var array = document.querySelectorAll(selector)
array.forEach(function(element){
	element.innerText = text
})
}



setText("p", "wasn't that hard, yeah ?");
setTextAll("div .block a", "or was it ?");

// var isImHappy = false
// if(!isImHappy){
// console.log("go to club")} else {
// console.log("drink tea")}


// var weather = "sunny"


// if (weather== "rain"){
// 	console.log("take umbrella")
// }if (weather== "sunny"){
// 	console.log("take sungluess")
// }if (weather== "rain"){
// 	console.log("take windsuit")
// }


// switch (weather){
// 	case "rain":
// console.log("take umbrella")
// 	break;
// 	case "sunny":
// console.log("take sungless")
// 	break;
// 	case "windy":
// console.log("take windsuit")
// 	break;
// }
// var body  = document.querySelector("h1")
// var date = new Date ();
// var hours = date.getHours()
// if (hours  >= 10 && hours <20) {
// body.setAttribute("style", "background:skyblue")
// } else {
// body.setAttribute("style", "background:#636363")
// }
// var h1  = document.querySelector("h1")
// function Clock(){
// var date = new Date ();
// date = date.toString();
// date = date.replace(/:/g,"-")
// date = date.split(" ");
// h1.innerText = date[4]
// }
// setInterval(Clock, 1000);

