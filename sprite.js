var backgroundSprite;
var phantom;
var bombSprite;

function Sprite(img, x, y, width, height) { //basically creates class for the sprite. Allows to control for all that data
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

}

Sprite.prototype.draw = function (renderingContext, x, y) { //makes this function reusable
    renderingContext.drawImage(this.img, this.x, this.y, this.width, this.height, x, y, this.width, this.height); //drawImage is native to canvas, need it to draw this. Redundant items are to break it from sprites to background


}

function initSprites (img) { //img is important, don't forget it
    phantom = new Sprite(img, 0, 250, 95, 100)
    bombSprite = new Sprite(img, 0, 350, 80, 80);
    backgroundSprite = new Sprite(img, 100, 0, 900, 500);

}