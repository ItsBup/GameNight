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
    event.preventDefault()
    const form = event.target
    let newName = form.name.value
    playerService.addPlayer(newName)
    this.drawPlayer()
  }
}
