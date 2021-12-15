function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
        (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY));
}
function drop(event) {
    var offset = event.dataTransfer.getData("text/plain").split(',');
    var dm = document.getElementById('dragme');
    dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    event.preventDefault();
    return false;
}
function drag_over(event) {
    event.preventDefault();
    return false;
}

function click(event) {
    let rect = document.getElementsByTagName('body').item(0).getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    var div = document.createElement('div');
    div.className = "de-" + uuidv4();
    div.style.backgroundColor = "black";
    div.style.position = "absolute";
    div.style.left = x;
    div.style.top = y;
    div.style.height = "100px";
    div.style.width = "100px";

    document.getElementsByTagName('body')[0].appendChild(div);
}

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}
function rectangle(){

}
function bezier() {
    
    var canvas = document.getElementById('myCanvas');
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    var ctx=canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
    ctx.stroke();
}
function start() {
    var dm = document.getElementById('dragme');
    dm.addEventListener('dragstart', drag_start, false);
    document.body.addEventListener('dragover', drag_over, false);
    document.body.addEventListener('drop', drop, false);
    document.body.addEventListener('click', click, false);
    // bezier();

}

start();