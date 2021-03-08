import axios from 'axios';
import {  USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
  //console.log("settig localStorage")
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    // Send a request and wait for our response from the backend
    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
   
    // Set user to localStorage
    if (window !== undefined) {
     
      localStorage.setItem('userInfo', JSON.stringify(data));
    }else{
      console.log("error in setting local storage")
    }
   
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//
export const googleLogin = (reqData) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    // Send a request and wait for our response from the backend
    const { data } = await axios.post(
      '/api/users/login?from=google',
      reqData,
      config
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
   
    // Set user to localStorage
    if (window !== undefined) {
     
      localStorage.setItem('userInfo', JSON.stringify(data));
    }else{
      console.log("error in setting local storage")
    }
   
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_LOGOUT });
  };