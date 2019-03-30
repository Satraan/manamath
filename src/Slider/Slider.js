import React, { Component } from 'react';
import { Range, Fab } from 'react-onsenui';

class Slider extends Component {
  state = {
    turn:this.props.turn
  }

  sliderHandler = (event) => {
    var value = event.target.value;
    value = value/14;
    value = Math.round(value);
    this.props.addTurns(value, this.props.color)

   this.setState({
      turn: value
    })
  }

  buttonHandler = (event) => {
    var symbols = parseInt(event.target.dataset.symbols)
    if (symbols==3) {
      symbols = 0
      event.target.dataset.symbols = symbols
      this.props.addSymbols(symbols, this.props.color)
      return
    }

    symbols++;
    event.target.dataset.symbols = symbols

    this.props.addSymbols(symbols, this.props.color)

  }

  render (){
    return (
      <div className={'slider ' + this.props.color}>
          <Fab ripple={true} data-symbols={0} onClick={this.buttonHandler}>
         </Fab>
         {this.state.turn}
          <Range modifier="material"
            value={(this.state.turn)*14}
            onChange={this.sliderHandler}
            />
      </div>
    )
  }
};

export default Slider;
