import { AppState } from "../AppState.js"
import { Player } from "../models/Player.js"
import { PlayerService } from "../services/PlayerService.js"

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
    PlayerService.addpoint(playerName)
    this.drawPlayer
  }
  losePoint(playerName){
    PlayerService.losepoint(playerName)
    this.drawPlayer
  }
}
