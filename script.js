var buttone = document.getElementById("btn");

var input;
var RanNo


function generateRandomValue(){
	RanNo= Math.floor(Math.random()*41)-20;
	document.getElementById("num").innerText =RanNo;
	getGuess();
	result();
}
function getGuess(){
	input = Number(document.getElementById("guess").value);
}
function result(){
	
	if(Math.abs(RanNo - input) <= 5){
	document.getElementById("respond").innerText ="Hot";
	}
	else{
	document.getElementById("respond").innerHTML ="Cold";
	}
}
buttone.addEventListener("click", generateRandomValue)

   