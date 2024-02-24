import React, { useReducer } from 'react';
import axios from 'axios';
// import useId from '@mui/material/utils/useId';
import AuthReducer from './authReducer';
import AuthContext from './authContext';
import {
  AUTH_FAIL,
  AUTH_SUCCESS,
  CHANGEPASSWORD_FAIL,
  CHANGEPASSWORD_SUCCESS,
  CLEAR_ERROR,
  LOGOUT,
  OTPSEND_FAIL,
  OTPSEND_SUCCESS,
  OTPVERIFY_FAIL,
  OTPVERIFY_SUCCESS,
  SIGNIN_FAIL,
  SIGNIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
} from '../type';
import setAuthToken from '../../utils/setAuthToken';

const AuthState = ({ children }) => {
  const initialState = {
    token: null,
    role: null,
    isAuthenticated: false,
    isLoading: true,
    user: null,
    error: null,
    otpRequest: null,
    optVerify: null,
    changePass: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const getUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const response = await axios.get('/api/auth');
      // console.log(response);
      // dispatch({ type: 'AUTH_SUCCESS', payload: response.data });
      dispatch({
        type: AUTH_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log('error', error);
      dispatch({
        type: AUTH_FAIL,
        // payload: error.response.data.msg,
      });
    }
  };
  const SignUpUserHandler = async (data) => {
    try {
      const apidata = {
        ...data,
        role: 0,
      };
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await axios.post('/api/users', apidata, config);
      console.log('signup successful', response);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response.data,
      });
      if (localStorage.token) {
        getUser();
      }
    } catch (error) {
      // console.log('error', error.message);
      console.log('error', error.response.data.errors);
      dispatch({
        type: SIGNUP_FAIL,
        payload:
          error.response.data.msg ||
          error.response.data.errors.map((errorObject, index) => (
            <span key={index}>{errorObject.msg}</span>
          )),
      });
    }
  };
  const SignUpAdminHandler = async (data) => {
    try {
      const apidata = {
        ...data,
        role: 1,
      };
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await axios.post('/api/users', apidata, config);
      console.log('signup successful', response);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response.data,
      });
      if (localStorage.token) {
        getUser();
      }
    } catch (error) {
      // console.log('error', error.message);
      console.log('error', error.response.data.errors);
      dispatch({
        type: SIGNUP_FAIL,
        payload:
          error.response.data.msg ||
          error.response.data.errors.map((errorObject, index) => (
            <span key={index}>{errorObject.msg}</span>
          )),
      });
    }
  };
  const SignUpVendorHandler = async (data) => {
    try {
      const apidata = {
        ...data,
        role: 2,
      };
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await axios.post('/api/users', apidata, config);
      console.log('signup successful', response);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response.data,
      });
      if (localStorage.token) {
        getUser();
      }
    } catch (error) {
      // console.log('error', error.message);
      console.log('error', error.response.data.errors);
      dispatch({
        type: SIGNUP_FAIL,
        payload:
          error.response.data.msg ||
          error.response.data.errors.map((errorObject, index) => (
            <span key={index}>{errorObject.msg}</span>
          )),
      });
    }
  };
  const SignInUserHandler = async (data) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await axios.post('/api/auth', data, config);
      // token = await response.data.token;
      if (response.data.role === '0') {
        console.log('signin successful', response);
        dispatch({ type: SIGNIN_SUCCESS, payload: response.data });
      } else {
        dispatch({
          type: SIGNIN_FAIL,
          payload: 'User not exist',
        });
      }
    } catch (error) {
      // console.log('error', error.message);
      console.log('error', error);
      dispatch({
        type: SIGNIN_FAIL,
        payload:
          error.response.data.msg ||
          error.response.data.errors.map((errorObject, index) => (
            <span key={index}>{errorObject.msg}</span>
          )),
      });
    }
  };
  const SignInAdminHandler = async (data) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await axios.post('/api/auth', data, config);
      // token = await response.data.token;
      if (response.data.role === '1') {
        console.log('signin successful', response);
        dispatch({ type: SIGNIN_SUCCESS, payload: response.data });
      } else {
        dispatch({
          type: SIGNIN_FAIL,
          payload: 'User not exist',
        });
      }
      return response;
    } catch (error) {
      // console.log('error', error.message);
      console.log('error', error);
      dispatch({
        type: SIGNIN_FAIL,
        payload:
          error.response.data.msg ||
          error.response.data.errors.map((errorObject, index) => (
            <span key={index}>{errorObject.msg}</span>
          )),
      });
    }
  };
  const SignInVendorHandler = async (data) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await axios.post('/api/auth', data, config);
      // token = await response.data.token;
      if (response.data.role === '2') {
        console.log('signin successful', response);
        dispatch({ type: SIGNIN_SUCCESS, payload: response.data });
      } else {
        dispatch({
          type: SIGNIN_FAIL,
          payload: 'User not exist',
        });
      }
      return response;
    } catch (error) {
      // console.log('error', error.message);
      console.log('error', error);
      dispatch({
        type: SIGNIN_FAIL,
        payload:
          error.response.data.msg ||
          error.response.data.errors.map((errorObject, index) => (
            <span key={index}>{errorObject.msg}</span>
          )),
      });
    }
  };

  const ForgetPasswordHandler = async (data) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      let response = await axios.post('/api/reset', data, config);
      console.log('fp response', response);
      dispatch({ type: OTPSEND_SUCCESS, payload: response.data });
    } catch (error) {
      console.log('error', error);
      dispatch({
        type: OTPSEND_FAIL,
        payload:
          error.response.data.msg ||
          error.response.data.errors.map((errorObject, index) => (
            <span key={index}>{errorObject.msg}</span>
          )),
      });
    }
  };

  const OTPVerification = async (data) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await axios.post('/api/reset/verify', data, config);
      console.log('user otp', data);
      console.log('Verification result', response.data);
      if (response.data?.verify === true) {
        dispatch({ type: OTPVERIFY_SUCCESS, payload: response.data });
      } else {
        dispatch({ type: OTPVERIFY_FAIL, payload: response.data.msg });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: OTPVERIFY_FAIL,
        payload:
          error.response.data.msg ||
          error.response.data.errors.map((errorObject, index) => (
            <span key={index}>{errorObject.msg}</span>
          )),
      });
    }
  };

  const ChangePassword = async (data) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await axios.put('/api/reset/verify', data, config);
      console.log('reset password response is', response.data);
      if (response.data?.updateUser) {
        dispatch({ type: CHANGEPASSWORD_SUCCESS, payload: response.data });
      } else {
        dispatch({ type: CHANGEPASSWORD_FAIL, payload: response.data.msg });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: CHANGEPASSWORD_FAIL,
        payload: error.response.data.msg,
        // ||
        // error.response.data.errors.map((errorObject, index) => (
        //   <span key={index}>{errorObject.msg}</span>
        // )),
      });
    }
  };

  const logoutHandler = () => {
    dispatch({ type: LOGOUT });
  };
  const clearErrorHandler = () => {
    dispatch({ type: CLEAR_ERROR });
  };
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        role: state.role,
        isAuthenticated: state.isAuthenticated,
        isLoading: state.isLoading,
        user: state.user,
        error: state.error,
        otpRequest: state.otpRequest,
        otpVerify: state.otpVerify,
        changePass: state.changePass,
        SignUpUserHandler,
        SignUpAdminHandler,
        SignUpVendorHandler,
        SignInUserHandler,
        clearErrorHandler,
        SignInAdminHandler,
        SignInVendorHandler,
        getUser,
        logoutHandler,
        ForgetPasswordHandler,
        OTPVerification,
        ChangePassword,
        // SignInUserExists,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
