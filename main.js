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
