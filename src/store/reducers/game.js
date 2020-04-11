import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  boxes: {
    red: 0,
    yellow: 0,
    green: 0,
    blue: 0
  },
  score: 0,
  tries: 0,
  loading: false,
  error: null
}

const boxClicked = (state, action) => {
   const tries = state.tries + 1;
   const boxes ={ ...state.boxes };
   if(action.boxColor === action.pColor ){

      boxes[action.textColor] = 2;
      const score = state.score + 1;
      const updatedState = {
        boxes: boxes,
        score: score,
        tries: tries
      }

      return updateObject(state, updatedState);
   }
   boxes[action.textColor] = 1;
   const updatedState = {
     boxes: boxes,
     tries: tries
   }
   return updateObject(state, updatedState);
}


const saveGameStart = (state, action) => {
  return updateObject(state, {loading: true});
}

const saveGameSuccess = (state, action) => {
  return updateObject(state, {loading: false});
}

const saveGameFail = (state, action) => {
  return updateObject(state, {error: action.error});
}

const resetState = (state, action) => {
   const resetedState = {
     boxes: {
       red: 0,
       yellow: 0,
       green: 0,
       blue: 0
     },
     score: 0,
     tries: 0,
     loading: false,
     error: null
   }
   return updateObject(state, resetedState);
}

const reducer = (state = initialState, action) => {
  switch ( action.type ) {
     case actionTypes.BOX_CLICKED: return boxClicked( state, action );
     case actionTypes.RESET_STATE: return resetState( state, action );
     case actionTypes.SAVE_GAME_START: return saveGameStart(state, action);
     case actionTypes.SAVE_GAME_FAIL: return saveGameFail(state, action);
     case actionTypes.SAVE_GAME_SUCCESS: return saveGameSuccess(state, action);
     default: return state;
 }
}

export default reducer;
