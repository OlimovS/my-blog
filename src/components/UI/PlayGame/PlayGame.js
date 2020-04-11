import React from 'react';

import './PlayGame.css';

const playGame = (props) => (
  <div onClick={props.clicked} className="for-back">
  <div className="play-game">
  <p className="game-text">Play Game!</p>
  </div>
  </div>
);

export default playGame;
