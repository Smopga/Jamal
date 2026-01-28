export class Renderer {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
  }

  clear() {
    this.ctx.fillStyle = "#111";
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  rect(x, y, w, h, color="white") {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  }

  text(txt, x, y, size=16, color="white") {
    this.ctx.fillStyle = color;
    this.ctx.font = size + "px Arial";
    this.ctx.fillText(txt, x, y);
  }
}
