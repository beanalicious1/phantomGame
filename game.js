var width = 900;
var height = 500;
var canvas;
var renderingContext;
var frames;
var currentState;
var states = {
    Splash: 0,
    Game: 1,
    Score: 2
};
var thebomb;


function main(){
    windowSetup();
    canvasSetup();

    currentState = states.Splash;

    document.body.appendChild(canvas);
    myphantom = new Hero();
    loadGraphics();
}

function windowSetup(){
    document.addEventListener("keydown", onpress);
    document.addEventListener("keyup", removeMotion);
}

function canvasSetup() {
    canvas = document.createElement("canvas");
    canvas.style.border = "2px solid black";

    canvas.width = width;
    canvas.height = height;

    renderingContext = canvas.getContext("2d");
}

function Bomb() {
    this.x = myphantom.x;
    this.y = myphantom.y + 20;
    this.velocity = 2;
    this._jump = 4.6;
    this.gravity = 0.35;
    
    this.jump = function () {
        this.velocity = -this._jump;
    }

    this.update = function () {
        this.velocity += this.gravity;
        this.y += this.velocity;
    }
}

function removeMotion(evt){
    myphantom._direction = "";
}

function onpress(evt){
    switch(evt.keyCode){
        case 37:
            myphantom._direction = "left";
            break;
        case 39:
            myphantom._direction = "right";
            break;
    }
}

function Hero(){
    this.x = 250;
    this.y = 14;
    this.width = 100;
    this.height = 100;
    this._direction = "";
    this.friction = 0.95;
    this.maxspeed = 8;
    this.velx = 0;

    this.update = function(){
        if(currentState === states.Splash){
            this.updatePlayingHero();
        }
    }

    this.updatePlayingHero = function(){
        if(this._direction === "left"){
            if (this.velx > -this.maxspeed) {
                this.velx --;
            }

        }
        if (this._direction === "right") {
            if (this.velx < this.maxspeed) {
                this.velx ++;
            }
        }

        this.velx *= this.friction;
        this.x += this.velx;

    }

    this.draw = function(renderingContext){
        renderingContext.save();
        phantom.draw(renderingContext, this.x, this.y);
        renderingContext.restore();
    }
}

function loadGraphics(){
    var img = new Image();
    img.src = "spriteSheet.png";
    img.onload = function(){
        initSprites(this);
        gameLoop();
    };
}

function gameLoop(){
    update();
    render();
    window.requestAnimationFrame(gameLoop);
}

function update(){
    myphantom.update();
}

function render(){
    backgroundSprite.draw(renderingContext, 0, 0);
    myphantom.draw(renderingContext);
}















// var width = 900;
// var height = 500;
// var canvas;
// var renderingContext;
// var frames;
// var currentState;
// var states = { //creates an object for game states
//     Splash: 0,
//     Game: 1,
//     Score: 2
// };
//
//
// function main() { //set up canvas and window
//     windowSetup(); //check width and height for browser
//     canvasSetup(); //create canvas with document.createlement("canvas")
//
//     currentState = states.Splash;
//     document.body.appendChild(canvas); //this is what actually puts canvas on the page
//     myPhantom = new Hero();
//     loadGraphics();
// }
//
// function windowSetup() {
//     document.addEventListener("keydown", onpress);
//     document.addEventListener("keyup", removeMotion)
// }
//
// function canvasSetup() {
//     canvas = document.createElement("canvas"); //creates the canvas element
//     canvas.style.border = "2px solid black"; //to see if it actually draws canvas
//     canvas.width = width; //set width with global width variable
//     canvas.height = height; //same with heigh variable
//
//     renderingContext = canvas.getContext("2d"); //renderingContext required, can be 2d or 3d
// }
//
// function removeMotion(evt) {
//     myPhantom._direction = "";
// }
//
// function onpress(evt) { //set up keypresses
//     switch (evt.keyCode) { //use switch to check, it's less code than an if statement and more efficient for checking 2 things
//         case 37:
//             myPhantom._direction("left");
//             console.log("moving left");
//             break;
//         case 39:
//             console.log("moving right");
//             myPhantom._direction("right");
//             break;
//     }
// }
//
//
// function Hero() {
//     this.x = 250;
//     this.y = 14;
//     this.width = 100;
//     this.height = 100;
//     this._direction = "";
//     this.maxspeed = 5;
//
//     // this.move = function () {
//     //     switch (this._direction) {
//     //         case "left":
//     //             _direction = "left";
//     //             break;
//     //         case "right":
//     //             _direction = "right";
//     //             break;
//     //     }
//     //
//     //
//     // }
//
//     this.update = function () {
//         if(currentState === states.Splash) {
//             this.updatePlayingHero();
//         }
//
//     }
//
//     this.updatePlayingHero = function () {
//         if (this._direction === "left") {
//             this.x -= this.maxspeed;
//         }
//         if (this._direction === "right") {
//             this.x += this.maxspeed;
//         }
//     }
//
//     this.draw = function (renderingContext) {
//         renderingContext.save();
//         phantom.draw(renderingContext, this.x, this.y);
//         renderingContext.restore();
//     }
// }
//
// function loadGraphics() {
//     var img = new Image();
//     img.src = "spriteSheet.png"; //source is the spritesheet
//     img.onload = function () {
//         initSprites(this); //(this) refers to this image, since we're inside the image elemeent
//         gameLoop();
//     };
// }
//
// function gameLoop() {
//     update();
//     render();
//     window.requestAnimationFrame(gameLoop);
// }
//
// function update() {
//     myPhantom.update();
//
// }
//
// function render() {
//     backgroundSprite.draw(renderingContext, 0, 0); //this is what will make the background actually appear on canvas
//     myPhantom.draw(renderingContext);
// }