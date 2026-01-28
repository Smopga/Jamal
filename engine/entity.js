export class Entity {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = 0;
    this.vy = 0;
    this.speed = 200;
  }

  update(dt) {
    this.x += this.vx * dt;
    this.y += this.vy * dt;
  }
}
