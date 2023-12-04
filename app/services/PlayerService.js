import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";

class PlayerService {
  addMessage(message) {
    AppState.examples.push(new Player(message))
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

export const PlayerService = new PlayerService()