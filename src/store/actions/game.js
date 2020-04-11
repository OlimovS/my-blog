import * as actionTypes from './actionTypes';
import axios from '../../axios.js';

export const boxClicked = ( boxColor, textColor, pColor ) => {
   return {
     type: actionTypes.BOX_CLICKED,
     boxColor: boxColor,
     textColor: textColor,
     pColor: pColor
   }
}



export const resetState = () => {
  return {
    type: actionTypes.RESET_STATE
  }
}

export const saveGameStart = () => {
   return {
     type: actionTypes.SAVE_GAME_START
   }
}

export const saveGameFail = (error) => {
   return {
     type: actionTypes.SAVE_GAME_FAIL,
     error: error
   }
}

export const saveGameSuccess = () => {
   return {
     type: actionTypes.SAVE_GAME_SUCCESS
   }
}


export const saveGame = (score, token, userId) => {
    return dispatch => {
      dispatch(saveGameStart());

      const newDate = new Date();

      const scoreData = {
        score: score,
        userId: userId,
        time: newDate.toLocaleTimeString("en-GB", {hour: '2-digit', minute:'2-digit'}),
        date: newDate.toLocaleDateString()
      };
      axios.post('/score.json?auth=' + token, scoreData)
         .then(response => {
           dispatch(saveGameSuccess());
           dispatch(resetState());
         })
         .catch(error =>{
           console.log("score..", error);
           dispatch(saveGameFail(error.message));
         });
    }
}
