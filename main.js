CANVASX = 500;
CANVASY = 500;

//workaround to add events on page load
//courtesy of http://simonwillison.net/2004/may/26/addloadevent/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}//addLoadEvent
addLoadEvent(onStart);

function log(txt) {
	var logp = document.getElementById('jslog');
	logp.innerHTML += txt + '<br>';
}//log

function drawBorder() {
    var canvas = document.getElementById("bookmarks-canvas");
    var context = canvas.getContext("2d");
    context.strokeRect(0, 0, CANVASX, CANVASY);
}

function leftClick(event) {
	event = event || window.event;
	var canvas = document.getElementById('bookmarks-canvas'),
		x = event.pageX - canvas.offsetLeft,
		y = event.pageY - canvas.offsetTop;

    if (! clickBookmark(x, y)) {
        addBookmark(x, y);
    }
    return false;
}//leftClick

function onStart() {
	var drawingCanvas = document.getElementById('bookmarks-canvas');
	drawingCanvas.addEventListener('click', leftClick, false);
    var context = drawingCanvas.getContext("2d");

    drawBorder();
    drawLandmarks(context);
}//onStart
