// Global Variables
// main-container
var mainContainer = document.getElementById('main-container');
var container = document.createElement('div');
// used to hold choosed color
let choosedColor = '#000000';


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
inputColor.onchange = () => { return (choosedColor = inputColor.value) };
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
listReset.appendChild(btnReset);
// appending list reset
list.appendChild(listReset);





// footer elements
var text = document.createElement('div');
text.className = 'footer-text'
text.innerHTML = `<h4>TheOdinProject ${new Date().getFullYear()}  Tebibux &copy</h4>`;
footer.appendChild(text);
var link = document.createElement('div');
link.className = 'footer-link';
link.innerHTML = `<a href="http://github.com/Tebibux/Etch-A-Sketch" target="_blank"><i class="fab fa-github"></i></a>`;
footer.appendChild(link);



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