import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import {FaRedoAlt, FaRegSave} from 'react-icons/fa';
import { IconContext } from "react-icons";
import { connect } from 'react-redux';
import Auxi from '../../hoc/Auxi/Auxi';

import * as actions from '../../store/actions/index';
import './Game.css';
import BigBox from './BigBox/BigBox';
import { Spinner } from 'react-bootstrap';

const boxes = [
  {text: "red", color: "blue"},
  {text: "yellow", color: "green"},
  {text: "green", color: "red"},
  {text: "blue", color: "brown"}
];
// 1 bo'lsa disabled 2 bo'lsa true


class Game extends Component {



   render(){
      return(
        <Auxi>

        <div style={{width: this.props.width}} className="Game">
        <p className="game-score">Come on, try this game</p>
        <p className="my-explain">Your job is <br/>1. read the word<br/>2. find the color of word</p>


       <div className="game-info">
       <div className="game-tools">

       <div className="one-tool">
       {this.props.loading
           ? this.props.error === null ? <Spinner animation="border" size="sm" variant="success"/> : <span>Error</span>
           :  <span className={this.props.state.tries === 4 ? "icon-span" : "icon-span-not"} onClick={() => this.props.state.tries === 4 ? this.props.onSaveGameHandler(this.props.score, this.props.token, this.props.userId) : null} >
               <IconContext.Provider value={{ color: this.props.state.tries === 4
                    ?  "green" : "grey", size: "22px"}}>
                  <FaRegSave />
               </IconContext.Provider>
           </span>
         }

       <p>Save</p>
       </div>

       <div className="one-tool">
       <span  className={this.props.state.tries >= 1 ? "icon-span" : "icon-span-not"} onClick={() => this.props.state.tries >= 1 ? this.props.onResetHandler() : null} >
           <IconContext.Provider value={{ color: this.props.state.tries >= 1
                ?  "blue" : "grey", size: "19px"}}>
              <FaRedoAlt />
           </IconContext.Provider>
       </span>
       <p>Restart</p>
      </div>


       </div>


       <div className="game-result">
      <p className="game-score">Your score: {this.props.score} out of {this.props.state.tries}</p>
       </div>
       </div>


       {this.props.state.tries === 4
          ? this.props.score ===4 ?
            <Alert variant="success">
             Your score is {this.props.score}, You win !
             </Alert>
             : this.props.score === 3
               ? <Alert variant="info">
                Your score is {this.props.score} !
                </Alert>
               : this.props.score === 2
               ?<Alert variant="warning">
                Your score is {this.props.score} !
                </Alert>
                : this.props.score === 1
                 ?<Alert variant="danger">
                  Your score is {this.props.score} !
                  </Alert>
                 :<Alert variant="danger">
                 You lose !
                 </Alert>
          : null}


        <div className="my-game-container">
        {boxes.map(box => {

           return (
             <BigBox
                disabled={this.props.state.boxes[box.text]}
                answerTrue={this.props.state.boxes[box.text]}
                key={box.text}
                pText={box.text}
                pColor={box.color}
                boxClickHandler={this.props.onBoxClickHandler}
                />
           );
        })}
        </div>
        </div>

        </Auxi>
      );
   }
}

const mapStateToProps = state => {
   return {
     state: state.game,
     score: state.game.score,
     token: state.auth.token,
     userId: state.auth.userId,
     loading: state.game.loading,
     error: state.game.error
   }
}

const mapDispatchToProps = dispatch => {
   return {
     onBoxClickHandler: (bc, pc, tc) => dispatch(actions.boxClicked(bc, pc, tc)),
     onResetHandler: () => dispatch(actions.resetState()),
     onSaveGameHandler: (score, token, userId) => dispatch(actions.saveGame(score, token, userId))
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Game);
