import * as actionTypes from './actionTypes';
import axios from '../../axios';


export const fetchScoresStart = () => {
  return{
    type: actionTypes.FETCH_SCORES_START
  }
}

export const fetchScoresFail = (error) => {
  return{
    type: actionTypes.FETCH_SCORES_FAIL,
    error: error
  }
}

export const fetchScoresSuccess = (scores) => {
  return{
    type: actionTypes.FETCH_SCORES_SUCCESS,
    scores: scores
  }
}

export const fetchScores = (token, userId) => {
   return dispatch => {
     dispatch(fetchScoresStart());
     const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
     axios.get('/score.json' + queryParams)
       .then(response => {
         const scores = [];
         for(let key in response.data){
           scores.push({score: response.data[key].score, time: response.data[key].time, date: response.data[key].date, id: key});
         }
         dispatch(fetchScoresSuccess(scores));
       })
       .catch(err => {
         dispatch(fetchScoresFail(err.message));
       });

   }
}
