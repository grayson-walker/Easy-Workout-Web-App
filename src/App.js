import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import bench from './bench.png'
import smith from './smith-machine.png'
import dumbell from './dumbell.png'
import kettlebell from './kettlebell.jpeg'
import medicineBall from './medicineBall.jpg'
import bands from './bands.png'

var decideWorkout = require('./decideWorkout.js');


class Square extends Component{
  constructor(props) {
    super(props);
    this.state = { Clicked: false };
    this.coolMethod = this.props.coolMethod.bind(this);
    this.reverseMethod = this.props.reverseMethod.bind(this);
   }

   onClick(){
     this.setState({ Clicked: !this.state.Clicked });
      if(this.state.Clicked === false){
       this.coolMethod(this.props.name)
      }else{
       this.reverseMethod(this.props.name)
      }
   }

   render(props) {
     let btn_class = this.state.Clicked ? "checked" : "normal";
     return (
       <button className={btn_class} onClick={this.onClick.bind(this)} width="200" height="200">
        <img src = {this.props.picType} width="150" height="150" />
       </button>
    );
  }

}


class Board extends Component{
  constructor(props) {
     super(props);
     this.state = {
       LoaderClicked:false,
       Squares: {}
    }
  }

    coolMethod(name){
      var squares = this.state.Squares;
      squares[name] = true;
      this.setState({Squares: squares})
    }

    reverseMethod(name){
      var squares = this.state.Squares;
       delete squares[name]
      this.setState({Squares: squares})
    }

    renderSquare(picType,name) {
      return (
          <Square
            picType={picType}
            name = {name}
            coolMethod = {this.coolMethod.bind(this)}
            reverseMethod = {this.reverseMethod.bind(this)}
          />
      );
    }

    // buttonRender(){
    //   this.setState({ LoaderClicked: !this.state.LoaderClicked })
    // }

    makeTable(inputArray){
      let test = []
      for(var cell=0; cell< inputArray.length;cell++){
        test.push(<td>{inputArray[cell]}</td>)
      }

      return test
    }


    render() {
      // let showWorkout = this.state.LoaderClicked ? decideWorkout(this.state.Squares) : "";
        return (
          <div>
            <div>
              <div className="board-row">
                {this.renderSquare(smith,'smith')}
                {this.renderSquare(bench,'bench')}
              </div>
              <div className="board-row">
                {this.renderSquare(dumbell,'dumbell')}
                {this.renderSquare(kettlebell,'kettlebell')}
              </div>
              <div className="board-row">
                {this.renderSquare(medicineBall,'medicineBall')}
                {this.renderSquare(bands,'bands')}
              </div>
            </div>
            {/* <button onClick={this.buttonRender.bind(this)}>
               Load Workout
            </button> */}
            <h3>Here are your options for a workout:</h3>
            <table>
              <tr className = "red">
                Legs:  {this.makeTable(decideWorkout(this.state.Squares).Legs)}
              </tr>
              <tr className = "chest">
                  Chest:  {this.makeTable(decideWorkout(this.state.Squares).Chest)}
              </tr>
              <tr className = "red">
                  Biceps:  {this.makeTable(decideWorkout(this.state.Squares).Biceps)}
              </tr>
              <tr  className = "chest">
                Shoulders:  {this.makeTable(decideWorkout(this.state.Squares).Shoulders)}
              </tr>
            </table>
          </div>
        );
    }
}


class App extends Component {
  render() {
    const status = 'Select your available workout equipment below:';
    return (
      <div className="App">
        <h1 className="status">{status}</h1>
        <Board/>
      </div>
    )
  }
}


export default App;
