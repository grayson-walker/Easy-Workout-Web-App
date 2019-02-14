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
        <img src = {this.props.picType} width="200" height="200" />
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

    buttonRender(){
      this.setState({ LoaderClicked: !this.state.LoaderClicked })
    }


    render() {
      let showWorkout = this.state.LoaderClicked ? decideWorkout(this.state.Squares) : "";
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
            <button onClick={this.buttonRender.bind(this)}>
               Load Workout
            </button>
            <div className='chest'>
            Chest:  {showWorkout.Chest}
            </div>
            <div className='legs'>
            Legs:  {showWorkout.Legs}
            </div>
            <div className='chest'>
            Biceps:  {showWorkout.Biceps}
            </div>
            <div className='legs'>
            Shoulders:  {showWorkout.Shoulders}
            </div>
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
