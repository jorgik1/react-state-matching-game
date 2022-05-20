import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'
import { createTiles, indexOfSelected } from '../../misc/utils'
import './App.css';
class App extends Component{
    constructor (props) {
      super(props);
      this.state = {};
      this.state = {
        numTiles: 14,
        playing: false,
        previousTileIndex: null,
        tiles: [],
        toBeCleared: null
      };
    }

    startGame = () => {
      this.setState({
        playing: true,
        previousTileIndex: null,
        toBeCleared: null,
        tiles: createTiles(this.state.numTiles, this.handleTileClicked)
      });
    }

    handleTileClicked = (id, color) => {
      this.setState(() => {
        const tiles = this.state.tiles;
        let toBeCleared = this.state.toBeCleared;
        const selectedTileIndex = indexOfSelected(tiles, id, color);
        let previousTileIndex = this.state.previousTileIndex;
        if (previousTileIndex !== null) {
          let previousTile = tiles[previousTileIndex];
          let selectedTile = tiles[selectedTileIndex];
          if (toBeCleared !== null) {
            tiles[toBeCleared[0]].selected = false;
            tiles[toBeCleared[1]].selected = false;
            toBeCleared = null;
          }
          tiles[selectedTileIndex].selected = true;
          if (previousTile.id !== selectedTile.id && previousTile.color === color) {
            previousTile.matched = true;
            selectedTile.matched = true;
            previousTileIndex = null;
          } else {
            toBeCleared = [previousTileIndex, selectedTileIndex];
            previousTileIndex = null;
          }
        } else {
          previousTileIndex = selectedTileIndex;
        }
        return {
          tiles: tiles,
          toBeCleared: toBeCleared,
          previousTileIndex: previousTileIndex
        }
      })
    }

    handleNumTileChange = (num) => {
      this.setState({
        numTiles: num,
        playing: false,
        tiles: []
      })
    }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <OptionsPanel startGame={this.startGame} playing={this.state.playing} numTiles={this.state.numTiles} handleNumTileChange={this.handleNumTileChange} />
        <Board numTiles={this.state.numTiles} tiles={this.state.tiles} />
    </div>
  );
  }

}

export default App;
