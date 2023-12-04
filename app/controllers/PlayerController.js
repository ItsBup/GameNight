import { AppState } from "../AppState.js"
import { PlayerService } from "../services/PlayerService.js"

function _logPlayers() {
  console.clear()
  AppState.Player.forEach(playerInstance => {
    console.log(playerInstance.message)
  })

}

export class PlayerController {
  constructor() {
    console.log('The PlayerController has loaded')
    AppState.on('player', _logExamples)
  }

  addMessage(message) {
    if (!message) {
      throw new Error('You must provide a message')
    }

    examplesService.addMessage(message)
  }

}
