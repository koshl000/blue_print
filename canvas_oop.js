'use strict'

class myCanvas {
    constructor(id) {
        this.canvas = document.getElementById(id);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
        window.addEventListener('resize',/*this.resizeCanvas().bind(this)*/() => this.resizeCanvas());
    }
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    bezier() {
        this.ctx.beginPath();
        this.ctx.moveTo(20, 20);
        this.ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
        this.ctx.stroke();
    }
}
const canvas1 = new myCanvas('myCanvas');
canvas1.bezier();