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
container.appendChild(header);
	// creating and appeding the board to the container
var board = document.createElement('div');
board.id = 'board';
board.className = 'board';
container.appendChild(board);
	// creating and appeding the footer to the container
var footer = document.createElement('div');
footer.id = 'footer';
footer.className = 'footer';
container.appendChild(footer);
	// appending the title of the page on header
var pageTitle = document.createElement('h1');
pageTitle.innerText = 'Etch-A-Sketch';
header.appendChild(pageTitle);













console.log(mianContainer);
