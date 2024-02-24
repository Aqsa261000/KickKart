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

const AuthReducer = (state, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case SIGNIN_SUCCESS:
      localStorage.setItem('role', action.payload.role);
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_SUCCESS: {
      return {
        ...state,
        token: localStorage.getItem('token'),
        role: localStorage.getItem('role'),
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
        // role: action.payload.role,
      };
    }
    case SIGNUP_FAIL:
    case SIGNIN_FAIL:
    case AUTH_FAIL:
    case LOGOUT:
    case OTPSEND_FAIL:
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      return {
        isAuthenticated: false,
        isLoading: false,
        error: action?.payload ?? null,
        user: null,
        otpRequest: false,
        otpVerify: false,
        changePass: false,
      };
    case OTPVERIFY_FAIL:
      return {
        isAuthenticated: false,
        isLoading: false,
        error: action?.payload ?? null,
        user: null,
        otpRequest: true,
        otpVerify: false,
        changePass: false,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        error: null,
        user: null,
      };

    case OTPSEND_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: false,
        isLoading: false,
        otpRequest: true,
        otpVerify: false,
        changePass: false,
      };

    case OTPVERIFY_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: false,
        isLoading: false,
        otpRequest: true,
        otpVerify: true,
        changePass: false,
      };
    case CHANGEPASSWORD_SUCCESS:
      return {
        ...state,

        isAuthenticated: false,
        isLoading: false,
        otpRequest: true,
        otpVerify: true,
        changePass: true,
      };

    case CHANGEPASSWORD_FAIL:
      return {
        isAuthenticated: false,
        isLoading: false,
        otpRequest: true,
        otpVerify: true,
        changePass: false,
        error: action?.payload ?? null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
