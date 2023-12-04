import { AppState } from "../AppState.js"

export class PlayerController {
  constructor() {
    console.log('The PlayerController has loaded')
    this.drawPlayer()
  }
  drawPlayer(){
    const players = AppState.players
    let content = ''
    players.forEach(player => content += player.playerTemplate())
    document.getElementById('player-list').innerHTML = content
  }

  addPoint(playerName){
    PlayerService.addPoint(playerName)
    this.drawPlayer
  }
  losePoint(playerName){
    PlayerService.losePoint(playerName)
    this.drawPlayer
  }
  addPlayer(){
    let newName = window.prompt('what is your name')
    PlayerService.addPlayer(newName)
    this.drawPlayer()
  }
}
