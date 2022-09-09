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
var colorPicker = document.createElement('li');
colorPicker.innerText = 'colorPicker';
listOfButton.appendChild(colorPicker);
var btnRGB = document.createElement('li');
btnRGB.innerText = 'btnRGB';
listOfButton.appendChild(btnRGB);
var btnGRAY = document.createElement('li');
btnGRAY.innerText = 'btnGRAY';
listOfButton.appendChild(btnGRAY);
var btnReset = document.createElement('li');
btnReset.innerText = 'btnReset';
listOfButton.appendChild(btnReset);
var inputSize = document.createElement('li');
inputSize.innerText = 'inputSize';
listOfButton.appendChild(inputSize);
var setSize = document.createElement('li');
setSize.innerText = 'setSize';
listOfButton.appendChild(setSize);



board.appendChild(listOfButton)




let col = 16;
// creating sketchbord
var sketchboard = document.createElement('div');
sketchboard.id = 'sketchboard';
sketchboard.style.width = '400px';
sketchboard.style.height = '400px';
sketchboard.style.display = 'grid';
sketchboard.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
sketchboard.style.gridTemplateRows = `repeat(${col}, 1fr)`;
// setting scketborad element to the sketchboard
for (let i = 0; i < (col * col); i++) {
	let sktBox = document.createElement('div');
	sktBox.className = 'sktBox'
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
