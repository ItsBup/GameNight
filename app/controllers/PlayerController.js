import { AppState } from "../AppState.js"
import { Player } from "../models/Player.js"
import { PlayerService } from "../services/PalyerService.js"

export class PlayerController {
  constructor() {
    console.log('The PlayerController has loaded')
    this.drawPlayer()
  }
  drawPlayer(){
    const players = AppState.characters
    let content = ''
    players.forEach(player => content += player.playerTemplate())
    document.getElementById('player-list').innerHTML = content
  }

  addPoint(){

  }
  losePoint(){
    
  }
}
