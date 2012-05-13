/* make sure the bookmark has a valid url */
/* not completed yet */
function urlValidate(url) {
    if (url === '') {
        return false;
    }

    return true;
}

function Bookmark(x, y, url) {
    this.img = new Image();
    this.img.src = "bookmark.png";
    this.x = x;
    this.y = y;
    this.url = url;
    this.hitBy = function(x, y) {
        if (  (x > this.x && x < this.x + this.width) &&
              (y > this.y && y < this.y + this.height)) {
            return true;
        } else {
            return false;
        }//if
    };
    this.paint = function(context) {
        context.drawImage(this.img, this.x, this.y);
    };
    this.onClick = function() {
        log("bookmark at " + x + "," + y + " was clicked.");
    };
}//Bookmark constructor

var bookmarkList = new Array();

function clickBookmark(x, y) {
    for (var i = 0, i_len = bookmarkList.length; i < i_len; i += 1) {
        bm = bookmarkList[i];
        if (bm.hitBy(x, y)) {
            bm.onClick();
            return true;
        }//if
    }//for
    return false; //nothing was clicked
}//clickBookmark

function drawBookmarks(context) {
    for (var i = 0, i_len = landmarkList.length; i < i_len; i += 1) {
        bookmarkList[i].paint(context);
    }//for
}

function addBookmark(x, y) {
    var url = prompt("Enter the bookmark's URL:");

    if (urlValidate(url)) {
        var bm = new Bookmark(x, y, url);
        bookmarkList.push(bm);

        var newdiv = document.createElement('div');
        newdiv.setAttribute('class', 'bookmark');
        newdiv.innerHTML = '<img src="bookmark.png"></img>';
        newdiv.setAttribute('style', "position:absolute; z-index: 2; left:" + x + "px; top:" + y + "px;");
        var canvasDiv = document.getElementById('canvasDiv');
        canvasDiv.appendChild(newdiv);
    }//if
}
function Landmark(path, x, y) {
    this.path = path;
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.paint = function(div) {
        pushLandmark(div, this.path, this.x, this.y);
    };
}//Landmark constructor

var landmarkList = new Array();

function drawLandmarks() {
    div = document.getElementById('bookmarksDiv');
    for (var i = 0, i_len = landmarkList.length; i < i_len; i += 1) {
        landmarkList[i].paint(div);
    }//for
}

function pushLandmark(div, path, x, y) {
    landmarkList.push(new Landmark(path, x, y));
}

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

function leftClick(event) {
    event = event || window.event;

    var div = document.getElementById('bookmarksDiv'),
        x = event.pageX - div.offsetLeft,
        y = event.pageY - div.offsetTop;

    if (! clickBookmark(x, y)) {
        addBookmark(x, y);
    }
    return false;
}//leftClick

function onStart() {
    var drawingDiv = document.getElementById('bookmarksDiv');
    drawingDiv.addEventListener('click', leftClick, false);
    drawLandmarks(drawingDiv);
    pushLandmark(drawingDiv, "landmark.png", 50, 50);
    pushLandmark(drawingDiv, "landmark.png", 100, 100);
    pushLandmark(drawingDiv, "landmark.png", 150, 150);
    pushLandmark(drawingDiv, "landmark.png", 200, 200);
    pushLandmark(drawingDiv, "landmark.png", 250, 250);
    pushLandmark(drawingDiv, "landmark.png", 300, 300);
    pushLandmark(drawingDiv, "landmark.png", 350, 350);
    pushLandmark(drawingDiv, "landmark.png", 400, 400);
}//onStart

