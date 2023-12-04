export class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
  playerTemplate(){
    return `      <div class="container mt-5">
    <div class="row bg-dark text-light align-items-center text-center justify-content-center">
      <div class="col-2">
        ${this.name}
      </div>
      <button onclick="app.PlayerController.losePoint(${this.name})" class="col-2 btn btn-warning">-</button>
      <div class="col-2">
        ${this.score}
      </div>
      <button onclick="app.PlayerController.addPoint(${this.name})" class="col-2 btn btn-warning">+</button>
    </div>
  </div>`
  }
}