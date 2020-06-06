import React, { Component, useState } from "react";
import FormInput from "../form-input/form-input.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";
import { connect } from 'react-redux';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import {SignInContainer, SignInTitle,ButtonHolder} from "./sign-in.style";

const SignIn = ({googleSignInStart, emailSignInStart}) =>  {

  const [userCredentials, setCredentials ] = useState({email : '', password: ''});
  const {email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password)

  };

  const handleChange = event => {
    const { name, value } = event.target; 

    setCredentials({...userCredentials,[name] : value});
  };


    return (
      <SignInContainer>
        <SignInTitle>I have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={handleChange}
            label="email"
            required
          ></FormInput>
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
            label="password"
            required
          ></FormInput>

          <ButtonHolder>
            <CustomButton>Sign in </CustomButton>

            {/* sign with google */}
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
              Sign in with Google{" "}
            </CustomButton>
          </ButtonHolder>
        </form>   
      </SignInContainer>
    );
  
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart : () => dispatch(googleSignInStart()),
  emailSignInStart : (email,password) => dispatch(emailSignInStart({  email, password}))
})
export default connect(null , mapDispatchToProps)(SignIn);
