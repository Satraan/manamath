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
          {
            this.props.hasWhite ?
            <SourceCounter classes="ui button white" present={this.state.white.present}/>
            :null
          }
          {
            this.props.hasBlue ?
            <SourceCounter classes="ui button blue" present={this.state.blue.present}/>
            :null
          }
          {
            this.props.hasBlack ?
            <SourceCounter classes="ui button black" present={this.state.black.present}/>
            :null
          }
          {
            this.props.hasRed ?
            <SourceCounter classes="ui button red" present={this.state.red.present}/>
            : null
          }
          {
            this.props.hasGreen ?
            <SourceCounter classes="ui button green" present={this.state.green.present}/>
            : null
          }
          <hr/>
          {
            this.props.hasWhite ?
              this.props.hasRed ? <button onClick={this.addMultiSource} data-color1="white" data-color2="red">Add 1 red & 1 white</button> :null

            :null
          }



          <button onClick={this.addSource} data-color="black">Add 1 black</button>
          <button onClick={this.addSource} data-color="red">Add 1 red</button>
          {
            this.props.hasRed && this.props.hasBlue ?
            <button onClick={this.addMultiSource} data-color1="red" data-color2="blue">Add 1 red & 1 blue</button>
            :null
          }
        </div>
      );
    }
}

export default Sources;
