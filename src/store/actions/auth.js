import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
   return{
     type: actionTypes.AUTH_START
   }
}

export const authSuccess = (token, userId) => {
   return {
     type: actionTypes.AUTH_SUCCES,
     idToken: token,
     userId: userId
   }
}

export const authFail = (error) => {
   return {
     type: actionTypes.AUTH_FAIL,
     error: error
   }
}

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const checkAuthTimeout = (expirationTime) => {
   return dispatch => {
     setTimeout(() => {
       dispatch(logout());
     }, expirationTime * 1000);
   }
}

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken	: true
    };

    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAegvjTwCeuJH6QwXIdz3UjuPzzApjc3m4';
    if(!isSignUp){
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAegvjTwCeuJH6QwXIdz3UjuPzzApjc3m4';
    }
    axios.post(url, authData)
      .then(response => {
        const expirationDate =  new Date(new Date().getTime() + response.data.expiresIn * 1000);
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('expirationDate', expirationDate)
        localStorage.setItem('userId', response.data.localId);
         dispatch(authSuccess(response.data.idToken, response.data.localId));
         dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(error => {
              let catchedError = null;
              if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                //  console.log("error.response.data..", error.response.data.error.message);
                   catchedError = error.response.data.error.message;
                } else if (error.request) {
                //  console.log("error.request..",error.request);
                  catchedError = "error occured";

                } else {
                  //console.log("error.message..", error.message);
                  catchedError = "error occured";
                }
                dispatch(authFail(catchedError));
      });
  }
}

export const authCheckState = () => {
   return dispatch => {
     const token = localStorage.getItem('token');
     if(!token){
       dispatch(logout());
     } else {
       const expirationDate = new Date(localStorage.getItem('expirationDate'));
       if(expirationDate > new Date()){
         const userId = localStorage.getItem('userId');
         dispatch(authSuccess(token, userId));
         dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime())/1000));
       } else{
         dispatch(logout());
       }
     }
   }
}
