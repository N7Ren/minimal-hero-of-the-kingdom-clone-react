import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Countdown, {zeroPad} from 'react-countdown';

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: [null, 'M', null, null, null, null, null, null, 'M'],
        inventory: {
          "Mushrooms": 0,
        },
        date: Date.now() + 5000,
      };
    }
  
    handleClick(i) {
      if(this.state.squares[i] === 'M') {
        this.state.inventory["Mushrooms"]++;
      }
      this.state.squares[i] = null;
      this.setState({squares: this.state.squares, inventory: this.state.inventory});
    }
  
    renderSquare(i) {
      return (
        <Square
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }

    countDownRenderer = ({ minutes, seconds, completed }) => {
      if (completed) { //reset
        this.state.squares = [null, 'M', null, null, null, null, null, null, 'M'];
        this.setState({ squares: this.state.squares, date: Date.now() + 5000 });
      }
    
      return (
        <span>
          {zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      );
    };
  
    render() {
      const status = 'Player inventory: Mushrooms:' + this.state.inventory["Mushrooms"];

      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <br/>
          <div>
            Time to respawn: <Countdown 
                              key={this.state.date} 
                              date={this.state.date} 
                              renderer={this.countDownRenderer}
                            />
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  