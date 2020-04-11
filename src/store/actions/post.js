import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const postSendStart = () => {
  return{
    type: actionTypes.POST_SEND_START
  }
}

export const postSendFail = (error) => {
  return {
    type: actionTypes.POST_SEND_FAIL,
    error: error
  }
}

export const postSendSuccess = () => {
   return {
     type: actionTypes.POST_SEND_SUCCESS
   }
}

export const postSend = (post, token, userId) => {
  return dispatch => {
    dispatch(postSendStart());
    const newDate = new Date();

    const sendingPost = {
      userId: userId,
      post: post,
      config: {
         time: newDate.toLocaleTimeString("en-GB", {hour: '2-digit', minute:'2-digit'}),
         date: newDate.toLocaleDateString(),
         seen: 0
       }


    };
    axios.post('/user-posts.json?auth=' + token, sendingPost)
      .then(response => {
        dispatch(postSendSuccess());
      })
      .catch(error => {
        dispatch(postSendFail(error.message));
      });
  }
}

//  Fetching Post


export const fetchPostStart = () => {
  return{
    type: actionTypes.FETCH_POST_START
  }
}

export const fetchPostFail = (error) => {
  return{
    type: actionTypes.FETCH_POST_FAIL,
    error: error
  }
}

export const fetchPostSuccess = (posts) => {
  return{
    type: actionTypes.FETCH_POST_SUCCESS,
    posts: posts
  }
}

export const fetchPost = (token, userId) => {
  return dispatch => {
     dispatch(fetchPostStart());
     const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
     axios.get('/user-posts.json' + queryParams)
        .then(response => {
          let posts = []
          for(let key in response.data){
             if(key !== "underConstruction"){
               posts.push({
                 post: response.data[key].post,
                 config: response.data[key].config,
                 id: key
               })
             }

          };
          dispatch(fetchPostSuccess(posts));

        })
        .catch(error => {
          dispatch(fetchPostFail(error.message));
        });
  }
}
