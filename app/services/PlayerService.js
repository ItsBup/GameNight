import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";

class PlayerService {
  addPlayer(newName) {
    let createdPlayer = new Player(newName)
    AppState.players.push(createdPlayer)
  }
  addPoint(playerName){
    let selectedPlayer = AppState.players.find(player => player.name == playerName)
    selectedPlayer.score += 1
  }
  losePoint(playerName){
    let selectedPlayer = AppState.players.find(player => player.name == playerName)
    selectedPlayer.score -= 1
  }
}

export const playerService = new PlayerService()