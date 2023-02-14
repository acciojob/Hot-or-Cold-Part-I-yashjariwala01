var buttone = document.getElementById("btn");
var pTag = document.getElementById("num");
var input;
var respo = document.getElementById("respond");
var inputValue= document.getElementById("guess").value;

function generateRandomValue(){
	var RanNo= Math.floor(Math.random()*41)-20;
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

   