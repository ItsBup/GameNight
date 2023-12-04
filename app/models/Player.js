export class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
  playerTemplate(){
    return `      <div class="container mt-5">
    <div class="row bg-dark text-light align-items-center text-center justify-content-center">
      <div class="col-2">
        name
      </div>
      <button class="col-2 btn btn-warning">-</button>
      <div class="col-2">
        score
      </div>
      <button class="col-2 btn btn-warning">+</button>
    </div>
  </div>`
  }
}