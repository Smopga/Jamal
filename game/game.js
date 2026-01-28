import { Engine } from "../engine/engine.js";
import { Renderer } from "../engine/renderer.js";
import { Keys } from "../engine/input.js";
import { Entity } from "../engine/entity.js";
import { Level } from "../engine/level.js";
import { saveGame, loadGame } from "../engine/save.js";

const canvas = document.getElementById("game");
const renderer = new Renderer(canvas);

const player = new Entity(100,100,30,30);
const level = new Level();

level.addWall(200,200,200,40);

let xp = 0;

const saved = loadGame();
if (saved) {
  player.x = saved.x;
  player.y = saved.y;
  xp = saved.xp;
}

function update(dt) {
  player.vx = player.vy = 0;

  if (Keys["w"]) player.vy = -player.speed;
  if (Keys["s"]) player.vy = player.speed;
  if (Keys["a"]) player.vx = -player.speed;
  if (Keys["d"]) player.vx = player.speed;

  player.update(dt);

  xp += dt;

  if (Math.floor(xp) % 10 === 0) {
    saveGame({x:player.x, y:player.y, xp});
  }
}

function render() {
  renderer.clear();
  level.draw(renderer);
  renderer.rect(player.x, player.y, player.w, player.h, "lime");
  renderer.text("XP: " + Math.floor(xp), 10, 20);
}

const engine = new Engine(update, render);
engine.start();
