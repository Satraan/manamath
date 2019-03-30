
import React, { Component } from 'react';
import { Segment } from 'react-onsenui';
import './App.scss';
import './semantic.css';
import './style.scss';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import SourceCounter from './SourceCounter/SourceCounter';
import Slider from './Slider/Slider.js';
import DeckSelector from './Buttons/DeckSelector';
class App extends Component {

  sourceMatrix = {
    limited: [
      {0: [0,0,0,0,0,0,0,0,0]},
      {1: [0,10,9,8,7,7,6,6]},
      {2: [0,0,14,13,12,11,10,10]},
      {3: [0,0,0,16,15,14,14,13]}
    ],
    constructed: [
      {0: [0,0,0,0,0,0,0,0,0]},
      {1: [0,14,13,12,11,10,9,9]},
      {2: [0,0,20,19,18,16,15,14]},
      {3: [0,0,0,22,22,21,20,19]}
    ],
    edh: [
      {0: [0,0,0,0,0,0,0,0,0]},
      {1: [0,23,21,20,18,17,16,15]},
      {2: [0,0,33,31,29,27,26,24]},
      {3: [0,0,0,37,36,34,33,32]}
    ],

  }

  state = {
      white: {required:0, turn:0, symbols:0},
      blue: {required:0, turn:0, symbols:0},
      black: {required:0, turn:0, symbols:0},
      red: {required:0, turn:0, symbols:0},
      green: {required:0, turn:0, symbols:0},
      deckSize: "constructed"
    }

    calculate = (color) => {
        this.setState({
          [color] : {
                      required:this.sourceMatrix[this.state.deckSize]
                      [this.state[color].symbols][this.state[color].symbols]
                      [this.state[color].turn],
                      turn:this.state[color].turn,
                      symbols:this.state[color].symbols},
        })

    }
    addTurns = (data, color) => {
      this.setState({
        [color] : {required: this.state[color].required,
                    turn:data,
                    symbols:this.state[color].symbols}
      })
      this.calculate(color);
    }
    addSymbols = (data, color) => {
      this.setState({
        [color] : {required:this.sourceMatrix[this.state.deckSize]
                  [this.state[color].symbols][this.state[color].symbols]
                  [this.state[color].turn],
                  turn:this.state[color].turn,
                  symbols:data}
      })
    }

    handleSegmentChange = (event) => {
      console.log(event.target.value)
      var result;
      switch(event.target.value) {
        case '0':
          result = "limited"
          break;
        case '1':
          result = "constructed"
          break;
        case '2':
          result = "edh"
          break;
        default:
          return
      }

      this.setState({
        deckSize:result
      })


    }

    render() {
      return (
        <div className="App">

        <SourceCounter classes="ui button white" present={this.sourceMatrix[this.state.deckSize]
            [this.state.white.symbols][this.state.white.symbols]
            [this.state.white.turn]}/>
        <SourceCounter classes="ui button blue" present={this.sourceMatrix[this.state.deckSize]
            [this.state.blue.symbols][this.state.blue.symbols]
            [this.state.blue.turn]}/>
        <SourceCounter classes="ui button black" present={this.sourceMatrix[this.state.deckSize]
            [this.state.black.symbols][this.state.black.symbols]
            [this.state.black.turn]}/>
        <SourceCounter classes="ui button red" present={this.sourceMatrix[this.state.deckSize]
            [this.state.red.symbols][this.state.red.symbols]
            [this.state.red.turn]}/>
        <SourceCounter classes="ui button green" present={this.sourceMatrix[this.state.deckSize]
            [this.state.green.symbols][this.state.green.symbols]
            [this.state.green.turn]}/>
        <hr/>
        <Slider addSymbols={this.addSymbols} addTurns={this.addTurns} color="white" turn={this.state.white.turn}/>
        <Slider addSymbols={this.addSymbols} addTurns={this.addTurns} color="blue" turn={this.state.blue.turn}/>
        <Slider addSymbols={this.addSymbols} addTurns={this.addTurns} color="black" turn={this.state.black.turn}/>
        <Slider addSymbols={this.addSymbols} addTurns={this.addTurns} color="red" turn={this.state.red.turn}/>
        <Slider addSymbols={this.addSymbols} addTurns={this.addTurns} color="green" turn={this.state.green.turn}/>
        <hr/>
        <div className="deckSegment">

        <Segment onClick={this.handleSegmentChange} modifier="material">
           <button>   40</button>
           <button>   60</button>
           <button>   99</button>
        </Segment>
        </div>
        </div>
      );
    }
}

export default App;
