import React, { Component } from 'react';
import './App.css';
import './semantic.css';
import './style.css';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import Sources from './Sources/Sources';
import MultiColorButton from './Buttons/MultiColorButton';
import Slider from './Slider/Slider.js';
import { Range, Fab, Icon } from 'react-onsenui';
class App extends Component {
  state = {
      white: {color:"white", required:0, present:0, turn:1, symbols:0},
      blue: {color:"blue", required:0, present:0, turn:4, symbols:0},
      black: {color:"black", required:0, present:0, turn:2, symbols:0},
      red: {color:"red", required:0, present:0, turn:1, symbols:0},
      green: {color:"green", required:0, present:0, turn:1, symbols:0},
    }
    //Turns will be 1-5
    sliderHandler = () => {
      console.log("handling slider");
    }

    render() {
      return (
        <div className="App">

          <Slider sliderHandler={this.sliderHandler} turn={this.state.white.turn}/>
          <Slider sliderHandler={this.sliderHandler} turn={this.state.blue.turn}/>
          <Slider sliderHandler={this.sliderHandler} turn={this.state.black.turn}/>


          <hr/>
          <Sources
          hasWhite={this.state.white.enabled}
          hasBlue={this.state.blue.enabled}
          hasBlack={this.state.black.enabled}
          hasRed={this.state.red.enabled}
          hasGreen={this.state.green.enabled}
          />
          <br/><br/>
          <br/>

          {this.state.white.enabled && this.state.blue.enabled ?
            <MultiColorButton />
            :null
          }

        </div>
      );
    }
}

export default App;

//
// import './App.css';
// import './style.css';
// import Card from './Card/Card';
//
// class App extends Component {
//   state = {
//     cards: [
//       {title: "Mana Drain", cmc:2},
//       {title: "Foil", cmc:4},
//       {title: "Disallow", cmc: 3}
//     ],
//     showCards: false
//   }
//
//   buttonHandler = (newCard) => {
//     //DO NOT DO THIS    this.state.cards[0].title = "Arcane Denial";
//     this.setState({
//         cards: [
//         {title: newCard, cmc:2},
//         {title: "Arcane Denial", cmc:2},
//         {title: "Disallow", cmc: 3}
//       ]
//     })
//   }
//
//   nameChangeHandler = (event) => {
//     this.setState({
//         cards: [
//         {title: "Mana Drain", cmc:2},
//         {title: event.target.value, cmc:2},
//         {title: "Disallow", cmc: 3}
//       ]
//     })
//   }
//
//   toggleCardsHandler = () => {
//     const doesShow = this.state.showCards;
//     this.setState({showCards: !doesShow});
//   }
//
//   render() {
//     const style = {
//       backgroundColor: 'red',
//       font: 'inherit',
//       border: '1px solid green'
//     };
//
//     return (
//       <div className="App">
//         <h1>Hi there</h1>
//         <button
//         style={style}
//         onClick={this.toggleCardsHandler}>Button</button>
//
//         {
//           this.state.showCards ?
//           <div>
//             <Card
//               title={this.state.cards[0].title}
//               click={this.buttonHandler.bind(this, 'Counterspell')}>
//               {this.state.cards[0].cmc}
//             </Card>
//             <Card
//               title={this.state.cards[1].title}
//               changed={this.nameChangeHandler}>
//               {this.state.cards[1].cmc}
//             </Card>
//             <Card title={this.state.cards[2].title}> {this.state.cards[2].cmc} </Card>
//           </div> : null
//         }
//
//
//       </div>
//     );
//   }
// }
//
// export default App;
