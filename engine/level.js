export class Level {
  constructor() {
    this.walls = [];
  }

  addWall(x, y, w, h) {
    this.walls.push({x,y,w,h});
  }

  draw(renderer) {
    for (let w of this.walls) {
      renderer.rect(w.x, w.y, w.w, w.h, "#444");
    }
  }
}
