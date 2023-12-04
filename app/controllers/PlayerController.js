import { AppState } from "../AppState.js"
import { Player } from "../models/Player.js"
import { playerService } from "../services/PlayerService.js"

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
    playerService.addPoint(playerName)
    this.drawPlayer()
  }
  losePoint(playerName){
    playerService.losePoint(playerName)
    this.drawPlayer()
  }
  addPlayer(){
    let newName = window.prompt('what is your name')
    playerService.addPlayer(newName)
    this.drawPlayer()
  }
}
