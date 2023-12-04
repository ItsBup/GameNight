import { Player } from './models/Player.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Player.js').Example[]} */
  examples = []

  players = [
    new Player("steve"), 
    new Player("bob"), 
    new Player("roxi")
  ];

}


export const AppState = createObservableProxy(new ObservableAppState())


