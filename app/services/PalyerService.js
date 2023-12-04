import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";

class PlayerService {
  addMessage(message) {
    AppState.examples.push(new Player(message))
  }
}

export const PlayerService = new PlayerService()