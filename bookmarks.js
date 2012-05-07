function Bookmark(x, y) {
    this.img = new Image();
    this.img.src = "bookmark.png";
    this.x = x;
    this.y = y;
    this.hitBy = function(x, y) {
        if (  (x > this.x && x < this.x + this.width) &&
              (y > this.y && y < this.y + this.height)) {
            return true;
        } else {
            return false;
        }//if
    };
    this.onClick = function() {
        log("landmark at " + x + "," + y + " was clicked.");
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

function addBookmark(x, y) {
    alert ("Adding bookmark at " + x + "," + y + " - not implemented yet!");
}
