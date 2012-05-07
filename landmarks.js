function Landmark(img, x, y) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.paint = function(context) {
        context.drawImage(this.img, this.x, this.y);
    };
}//Landmark constructor

var landmarkList = new Array();

function drawLandmarks(context) {
    for (var i = 0, i_len = landmarkList.length; i < i_len; i += 1) {
        landmarkList[i].paint(context);
    }//for
}

function pushLandmark(path, x, y) {
    var img = new Image();
    img.src = path;
    landmarkList.push(new Landmark(img, x, y));
}

pushLandmark("landmark.png", 50, 50);
pushLandmark("landmark.png", 100, 100);
pushLandmark("landmark.png", 150, 150);
pushLandmark("landmark.png", 200, 200);
pushLandmark("landmark.png", 250, 250);
pushLandmark("landmark.png", 300, 300);
pushLandmark("landmark.png", 350, 350);
pushLandmark("landmark.png", 400, 400);
