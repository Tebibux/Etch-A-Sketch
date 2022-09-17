// Global Variables
// default grid element
let col = 16;
// main-container
var mainContainer = document.getElementById('main-container');
var container = document.createElement('div');
// used to hold choosed color
let choosedColor = '#000000';
// creating default board
var defBoard = document.createElement('div');
// creating temp board
var tempBoard = document.createElement('div');


// header, board-body, footer (main stracture of the page)
var header = document.createElement('div');
var boardBody = document.createElement('div');
var footer = document.createElement('footer');
var list = document.createElement('ul');
var board = document.createElement('div');

// title of the page
var title = document.createElement('h1');

// giving id for variables and class
container.id = 'sub-container';
header.id = 'header';
boardBody.id = 'boardBody';
footer.id = 'footer';
title.innerText = 'Etch-A-Sketch';

// board property
board.id = 'board';
board.className = 'board';
// appending the title to the header
header.appendChild(title);



// list and list elements 
// element includes all btn and input elements
// and appending to the respective parent
// list element color
var listColor = document.createElement('li');
listColor.className = 'list list-color';
// creating button for picking a color
var inputColor = document.createElement('input');
inputColor.id = 'inputColor';
inputColor.className = 'list-element';
inputColor.type = 'color';
inputColor.onchange = () => { (choosedColor = inputColor.value) };
listColor.appendChild(inputColor);
// appending list color
list.appendChild(listColor);
//  list element input
var listInput = document.createElement('li');
listInput.className = 'list list-input';
// creating input field for the user input
var inputSize = document.createElement('input');
inputSize.id = 'inputSize';
inputSize.className = 'list-element';
inputSize.placeholder = 'Insert size';
listInput.appendChild(inputSize);
// appending list input
list.appendChild(listInput);
// list element set
var listSet = document.createElement('li');
listSet.className = 'list list-set';
// creating btnSetSize
var btnSet = document.createElement('button');
btnSet.className = 'list-element';
btnSet.innerText = 'Set Size';
btnSet.addEventListener('click', setSize);
listSet.appendChild(btnSet);
// appending list set
list.appendChild(listSet);
// list element reset
var listReset = document.createElement('li');
listReset.className = 'list list-reset';
// creating btnReset
var btnReset = document.createElement('button');
btnReset.id = 'btnReset';
btnReset.className = 'list-element';
btnReset.innerText = 'Reset';
// reload the page when reset 
// reload from the catch no data sent to the server
btnReset.addEventListener('click', () => location.reload());
listReset.appendChild(btnReset);
// appending list reset
list.appendChild(listReset);


// functions
function defaultBoard() {
	defBoard.id = 'defaultBoard';
	defBoard.className = 'defBoard board';
	defBoard.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
	defBoard.style.gridTemplateRows = `repeat(${col}, 1fr)`;
	for (let i = 0; i < (col ** 2); i++) {
		let sktBox = document.createElement('div');
		sktBox.className = 'sktBox';
		sktBox.id = `sktBox-${i}`;		
		sktBox.addEventListener('mouseover', sketchIt);
		sktBox.addEventListener('mousedown', sketchIt);	
		sktBox.style.border = '1px solid #0000002f';
		defBoard.appendChild(sktBox);
	}
};
defaultBoard();

function setSize() {
	if ((Number.isInteger(parseInt(inputSize.value)))) {
		// restricting the area range
		if (inputSize.value > 100) alert("Size must be less than 100");
		else if (inputSize.value < 1) alert("Size must be greater than 0");
		else {
			// remove the existing board
			board.removeChild(defBoard);
			tempBoard.id = 'tempBoard';
			tempBoard.className = 'tempBoard board';
			tempBoard.style.gridTemplateColumns = `repeat(${inputSize.value}, 1fr)`;
			tempBoard.style.gridTemplateRows = `repeat(${inputSize.value}, 1fr)`;
			for (let i = 0; i < ((inputSize.value) ** 2); i++) {
				let sktBox = document.createElement('div');
				sktBox.className = 'sktBox';
				sktBox.id = `sktBox-${i}`;
				sktBox.addEventListener('mouseover', sketchIt);
				sktBox.addEventListener('mousedown', sketchIt);	
				sktBox.style.border = '1px solid #0000002f';
				tempBoard.appendChild(sktBox);
			}
			// reappending with the new value
			board.appendChild(tempBoard);
		}
	}
};
// sketch when hover
function sketchIt() {
	this.style.backgroundColor =  choosedColor;
};


// end of functions

// footer elements
var text = document.createElement('div');
text.className = 'footer-text'
text.innerHTML = `<h4>TheOdinProject ${new Date().getFullYear()}  Tebibux &copy</h4>`;
footer.appendChild(text);
var link = document.createElement('div');
link.className = 'footer-link';
link.innerHTML = `<a href="http://github.com/Tebibux/Etch-A-Sketch" target="_blank"><i class="fab fa-github"></i></a>`;
footer.appendChild(link);


// appending default sub board
board.appendChild(defBoard);
// appeding element of the board-body 
boardBody.appendChild(list);
// appeding element of the board-body 
boardBody.appendChild(board);
// appending sub element to sub-containerall varialbe 
container.appendChild(header);
container.appendChild(boardBody);
container.appendChild(footer);
// appending sub container to the main container
mainContainer.appendChild(container);
