var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lilist = document.querySelector('li');
var ulchildren = document.getElementsByTagName('li')


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + ' '));
	ul.appendChild(li);
	input.value = "";

	var deletebutton = document.createElement("button");
	deletebutton.appendChild(document.createTextNode("Delete"));
	deletebutton.setAttribute('onclick',"parentElement.remove()")
	li.appendChild(deletebutton);

}
 

function Ullength(){

	return ulchildren.length;

}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}



ul.addEventListener('click', function(event){
	event.target.classList.toggle('done')
})

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



