export class Engine {
  constructor(update, render) {
    this.lastTime = 0;
    this.update = update;
    this.render = render;
  }

  start() {
    requestAnimationFrame(this.loop.bind(this));
  }

  loop(time) {
    const delta = (time - this.lastTime) / 1000;
    this.lastTime = time;

    this.update(delta);
    this.render();

    requestAnimationFrame(this.loop.bind(this));
  }
}
