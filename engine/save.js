export function saveGame(data) {
  localStorage.setItem("gameSave", JSON.stringify(data));
}

export function loadGame() {
  const d = localStorage.getItem("gameSave");
  return d ? JSON.parse(d) : null;
}
