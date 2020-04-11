import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  scores: [],
  loading: false,
  error: null
}

const fetScoresStart = (state, action) => {
   return updateObject(state, {loading: true, error: null});
}

const fetchScoresFail = (state, action) => {
  return updateObject(state, {loading: false, error: action.error});
}

const fetchScoresSuccess = (state, action) => {
  return updateObject(state, {loading: false, error: null, scores: action.scores});
}
const reducer = (state = initialState, action) => {
   switch (action.type) {
     case actionTypes.FETCH_SCORES_START: return fetScoresStart(state, action);
     case actionTypes.FETCH_SCORES_FAIL: return fetchScoresFail(state, action);
     case actionTypes.FETCH_SCORES_SUCCESS: return fetchScoresSuccess(state, action);
     default:
      return state;
   }
}

export default reducer;
