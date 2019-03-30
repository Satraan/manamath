import React, { Component } from 'react';
import SourceCounter from '../SourceCounter/SourceCounter';


class Sources extends Component {
  state = {
      white: {color:"white", required:5, present:0},
      blue: {color:"blue", required:0, present:0},
      black: {color:"black", required:5, present:0},
      red: {color:"red", required:0, present:0},
      green: {color:"green", required:0, present:0}
    }

    addSource = (event) => {
      var sourceColor = event.target.dataset.color;
      this.setState({
        [sourceColor]:{
                        color:this.state[sourceColor].color,
                        required:this.state[sourceColor].required,
                        present:this.state[sourceColor].present +1
                      }
      })
    }

    addMultiSource = (event) => {
      var sourceColor1 = event.target.dataset.color1;
      var sourceColor2 = event.target.dataset.color2;

      this.setState({
        [sourceColor1]:{
                        color:this.state[sourceColor1].color,
                        required:this.state[sourceColor1].required,
                        present:this.state[sourceColor1].present +1
                      },
        [sourceColor2]:{
                        color:this.state[sourceColor2].color,
                        required:this.state[sourceColor2].required,
                        present:this.state[sourceColor2].present +1
                      }
      })
    }

    render() {
      return (
        <div className="ui container main">
            <SourceCounter classes="ui button white" present={this.state.white.present}/>
            <SourceCounter classes="ui button blue" present={this.state.blue.present}/>
            <SourceCounter classes="ui button black" present={this.state.black.present}/>
            <SourceCounter classes="ui button red" present={this.state.red.present}/>
            <SourceCounter classes="ui button green" present={this.state.green.present}/>
        </div>
      );
    }
}

export default Sources;
