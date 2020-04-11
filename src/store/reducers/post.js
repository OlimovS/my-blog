import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
   posts: [],
   error: null,
   loading: false
}

const postSendStart = (state, action) => {
  return updateObject(state, {loading: true, error: null});
}

const postSendFail = (state, action) => {
  return updateObject(state, {loading: false, error: action.error});
}

const postSendSuccess = (state, action) => {
  return updateObject(state, {error: null, loading: false});
}


// fetching user post

const fetchPostFail = (state, action) => {
  return updateObject(state, {error: action.error, loading: false});
}

const fetchPostStart = (state, action) => {
  return updateObject(state, {loading: true, error: null});
}

const fetchPostSuccess = (state, action) => {
  return updateObject(state, {posts: action.posts, loading: false, error: null});
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_SEND_START:  return postSendStart(state, action);
    case actionTypes.POST_SEND_FAIL:  return postSendFail(state, action);
    case actionTypes.POST_SEND_SUCCESS:  return postSendSuccess(state, action);

    case actionTypes.FETCH_POST_FAIL:  return fetchPostFail(state, action);
    case actionTypes.FETCH_POST_START:  return fetchPostStart(state, action);
    case actionTypes.FETCH_POST_SUCCESS:  return fetchPostSuccess(state, action);

    default:
      return state;
  }
}

export default reducer;
