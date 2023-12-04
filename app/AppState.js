import { Player } from './models/Player.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Player.js').Example[]} */
  players = [new Player("Steve"), new Player("Bob"), new Player("Roxi")];
  examples = []
}


export const AppState = createObservableProxy(new ObservableAppState())

