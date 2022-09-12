// Creating the page structure
// main container
var mianContainer = document.getElementById('main-container');
// container
var container = document.createElement('div');
container.id = 'container';
container.className = 'container';
mianContainer.appendChild(container);
// creating and appeding the header to container
var header = document.createElement('div');
header.id = 'header';
header.className = 'header';
// appending the title of the page on header
var pageTitle = document.createElement('h1');
pageTitle.innerText = 'Etch-A-Sketch';
header.appendChild(pageTitle);
container.appendChild(header);








// creating and appeding the board to the container
var board = document.createElement('div');
board.id = 'board';
board.className = 'board';
// creating bord contents
// creating button list
var listOfButton = document.createElement('ul');
listOfButton.id = 'listOfButton'
// creating lists
// list for color picker
var colorPicker = document.createElement('li');
// canvas for color picker
var btnColorPicker = document.createElement('button');
btnColorPicker.id = 'colorPicker'
btnColorPicker.innerText = 'Pick Color'
btnColorPicker.addEventListener('click', pickColor);
// choosed color used to hold the vlaue black by defalt
// changes on change
let choosedColor = '#000000';
function pickColor(){
	console.log('you are here');
	var inputColor = document.createElement('input');
	inputColor.id = 'inputColor';
	inputColor.type = 'color';
	// chenges the color of chosed color
	inputColor.onchange = () => {
		choosedColor = inputColor.value;
		return choosedColor;
	}
	choosedColor = inputColor.value;
	// inputColor.onchange
	btnColorPicker.style.display = 'none';	
	colorPicker.appendChild(inputColor);
}
console.log(choosedColor)
colorPicker.appendChild(btnColorPicker);
// after clicking the button it will call the canvas function
// add color piker and change the size of the color canvas
// and cavace area will be 4:3 ratio in dimention 
//
listOfButton.appendChild(colorPicker);
// li for color picker


// li for reset button
var reset = document.createElement('li');
// button for reset
var btnReset = document.createElement('button');
btnReset.id = 'btnReset';
btnReset.className = 'btn btnReset';
btnReset.innerText = 'Reset';
reset.appendChild(btnReset);
listOfButton.appendChild(reset);
// li for input area
var inputSize = document.createElement('li');
listOfButton.appendChild(inputSize);
// li for setting size button
var input = document.createElement('input');
input.placeholder = 'Input size under 100';
input.id = 'inputField';
input.className = 'inputField';
inputSize.appendChild(input);
// li for button
var setSize = document.createElement('li');
// set size button here
var btnSetSize = document.createElement('button');
btnSetSize.id = 'btnSetSize';
btnSetSize.className = 'btn btnSetSize';
btnSetSize.innerText = 'Set Size';
setSize.appendChild(btnSetSize)
listOfButton.appendChild(setSize);



board.appendChild(listOfButton)




let col = 16;
// creating sketchbord
var sketchboard = document.createElement('div');
sketchboard.id = 'sketchboard';
sketchboard.style.width = '500px';
sketchboard.style.height = '500px';
sketchboard.style.display = 'grid';
sketchboard.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
sketchboard.style.gridTemplateRows = `repeat(${col}, 1fr)`;
// setting scketborad element to the sketchboard
for (let i = 0; i < (col * col); i++) {
	let sktBox = document.createElement('div');
	sktBox.className = 'sktBox'
	sktBox.style.border = '1px solid #fff'
	sketchboard.appendChild(sktBox);
}


sketchboard.style.backgroundColor = 'red';
board.appendChild(sketchboard)







container.appendChild(board);









// creating and appeding the footer to the container
var footer = document.createElement('div');
footer.id = 'footer';
footer.className = 'footer';
// footer content
var text = document.createElement('div');
text.className = 'footer-text'
text.innerHTML = `<h4>TheOdinProject ${new Date().getFullYear()}  Tebibux &copy</h4>`;
footer.appendChild(text);
var link = document.createElement('div');
link.className = 'footer-link';
link.innerHTML = `<a href="http://github.com/Tebibux/Etch-A-Sketch" target="_blank"><i class="fab fa-github"></i></a>`;
footer.appendChild(link);
container.appendChild(footer);


console.log(container);
