const canvas = document.querySelector('#duckHunt');

var ctx = canvas.getContext("2d");

console.log(canvas)

canvas.height = canvas.clientHeight
canvas.width = canvas.clientWidth


var duck_image_left = document.getElementById("duck_left");
var duck_image_right = document.getElementById("duck_right");



var duck_size = 100;
var hitbox = duck_size / 2

var score = 0;

var x = 100;
var y = 100;
var y_middle = canvas.height / 5
var dx = 25;
var dy = -25;

document.addEventListener("keydown", key, false);
document.addEventListener("keyup", key, false);


function key(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        x += dx
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        x -= dx

    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        y += dy
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        y -= dy
    }
    console.log(e)
}



function duck() {
    ctx.beginPath();
    const canvas_duck = ctx.drawImage(duck_image_right, x, y, duck_size, duck_size);
    ctx.closePath();

}

function display(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    duck();

    ctx.font = '48px serif';
    ctx.fillText("Score : " + score  ,10,50);

    console.log("x        ", x, "y        ", y)
}


canvas.addEventListener('click', function(event) {
    var rect = canvas.getBoundingClientRect();
    var mouse_x = event.clientX;
    var mouse_y = event.clientY;
    console.log("mouse_x: " + mouse_x + " mouse_y: " + mouse_y + "x: " + x + "y:" + y); 

    if(mouse_x >= x && mouse_x <= x + duck_size   &&   mouse_y >= y + 20 && mouse_y <= y + duck_size){
        console.log("clicked")
        score++
    }
}, false)
var interval = setInterval(display, 1);
