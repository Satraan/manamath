import React, { Component } from 'react';
import { Range, Fab, Icon } from 'react-onsenui';

class Slider extends Component {
  state = {
    turn:this.props.turn
  }

  sliderHandler = (event) => {

    var value = event.target.value;
    value = value/20;
    value = Math.round(value);

   this.setState({
      turn: value
    })
  }

  render (){
    return (
      <div className={this.props.classes}>
          <Fab ripple={true}>
           <Icon icon='fa-twitter' size={26} fixedWidth={false} style={{verticalAlign: 'middle'}} />
         </Fab>
         {this.state.turn}
          <Range modifier="material"
            value={(this.state.turn)*20}
            onChange={this.sliderHandler}
            />
      </div>
    )
  }
};

export default Slider;
