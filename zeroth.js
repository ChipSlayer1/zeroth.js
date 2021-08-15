// init function must always be called first
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var mouseX;
var mouseY;

// background function
function bck(col) {
    ctx.beginPath();
    ctx.fillStyle = col;
    ctx.fillRect(0, 0, width, height);
}

// rectangle function
function rect(x, y, w, h, c) {
    ctx.beginPath();
    ctx.fillStyle = c;
    ctx.fillRect(x, y, w, h);
}

// circle function
function circle(x, y, r, c, t) {
    ctx.beginPath();
    ctx.fillStyle = c;
    ctx.strokeStyle = c;
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    switch(t) {
        case 0:
            ctx.fill();
        break;
        case 1:
            ctx.stroke();
        break;
    }
}

// text
function txt(w, x, y, t, c) {
    switch(t) {
        case 0:
            ctx.fillStyle = c;
            ctx.fillText(w, x, y);
        break;
        case 1:
            ctx.strokeStyle = c;
            ctx.strokeText(w, x, y);
        break;
    }
}

// mouse movement function
function updateMouse(event) {
    mouseX = event.x;
    mouseY = event.y;
}

// touch movement function
function updateTouch(event) {
    event.preventDefault();

    var touch = event.touches[0];

    mouseX = touch.pageX;
    mouseY = touch.pageY;
}

// distance between 2 pts
function dist(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}