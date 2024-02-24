import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../../assets/sneaker.jpg';
import './style.css';
import AlertContext from '../../../../context/alert/alertContext';
import { BasicAlert } from '../../../common';
import AuthContext from '../../../../context/auth/authContext';
import { useNavigate } from 'react-router-dom';
const SignUpDefault = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const { SignUpUserHandler, error, clearErrorHandler, isAuthenticated } =
    authContext;
  const { AlertHandler } = alertContext;
  const [signup, setSignup] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    city: '',
    gender: '',
    phone: '',
  });
  const { name, email, password, confirmPassword, city, gender, phone } =
    signup;

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
    if (error) {
      AlertHandler(error, 'error');
      clearErrorHandler();
    }
  }, [error, isAuthenticated]);
  const onChangeHandler = (e) => {
    setSignup((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    console.log(signup);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // console.log(signup);

    if (
      !email ||
      !password ||
      !name ||
      !confirmPassword ||
      !city ||
      !gender ||
      !phone
    ) {
      AlertHandler('Please fill all the required fields', 'error');
    } else if (password !== confirmPassword) {
      AlertHandler('Password does not match', 'error');
    }
    // else if (password.length < 6) {
    //   AlertHandler('Password should be more than 6 characters', 'error');
    // }
    // else if (phone.length !== 11) {
    //   AlertHandler('Please enter correct phone number of 11 digits', 'error');
    // }
    else {
      // try {
      //   // Check if the email already exists
      //   const response = await SignUpUserExists();
      //   const isEmailExists = response.data.some(
      //     (user) => user.email === email
      //   );

      //   if (isEmailExists) {
      //     AlertHandler(
      //       'User with this email already exists, Please try again',
      //       'error'
      //     );
      //   } else {
      //     // Continue with the sign-up process if the email is unique
      //     SignUpUserHandler(signup);
      //     AlertHandler(
      //       'Congratulations! You have created your account, Welcome to KickKart!',
      //       'success'
      //     );
      //     navigate('/');
      //   }
      // } catch (error) {
      //   console.error('Error checking if email exists:', error.message);
      // }
      SignUpUserHandler(signup);
    }
  };
  return (
    <section>
      <BasicAlert />
      <div className="signup-registeration-form">
        <div className="column-1">
          <h2 className="signupHeading">SignUp</h2>
          <h4 className="signupsubHeading">Sign Up for free!</h4>
          <form
            id="signupForm"
            className="flexx flex-col"
            onSubmit={onSubmitHandler}
          >
            <input
              type="text"
              name="name"
              value={signup.name}
              placeholder="Type your Full Name"
              id="name"
              onChange={onChangeHandler}
            />
            <input
              type="email"
              name="email"
              value={signup.email}
              placeholder="Type your Email"
              id="email"
              onChange={onChangeHandler}
            />
            <input
              type="password"
              placeholder="Type your Password"
              name="password"
              value={signup.password}
              id="password1"
              onChange={onChangeHandler}
              // minLength={6}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={signup.confirmPassword}
              id="password2"
              onChange={onChangeHandler}
              // minLength={6}
            />
            <input
              type="city"
              placeholder="Enter City"
              name="city"
              value={signup.city}
              id="city"
              onChange={onChangeHandler}
            />
            <input
              type="text"
              name="gender"
              value={signup.gender}
              placeholder="Enter Gender"
              id="gender"
              onChange={onChangeHandler}
            />
            <input
              type="number"
              name="phone"
              value={signup.phone}
              placeholder="Enter your Contact Number"
              id="phone"
              onChange={onChangeHandler}
              minLength={11}
              maxLength={11}
            />
            {/* <i class="fa-regular fa-eye .eye-icon-1"></i> */}

            <button className="btn" type="submit">
              Sign Up
            </button>
          </form>

          <p className="flexx2">
            Already Have an Account?{' '}
            <Link to="/login" className="linkk">
              Login
            </Link>
          </p>
          <p style={{ textAlign: 'center', fontWeight: 700 }}>OR</p>
          <Link to={'/vendorsignup'} className="linkItems">
            Sign Up as Vendor?
          </Link>
        </div>
        <div className="col-2">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SignUpDefault;
