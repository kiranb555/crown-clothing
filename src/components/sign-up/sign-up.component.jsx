import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";
import { signUpStart } from "../../redux/user/user.actions";

import { SignUpHolder, SignUpTitle } from "./sign-up.style";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <SignUpHolder>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        ></FormInput>
        <CustomButton type="submit" onClick={handleSubmit}>
          Sign Up{" "}
        </CustomButton>
      </form>
    </SignUpHolder>
  );
};

const mapDispatchToProps = (display) => ({
  signUpStart: (userCredentials) => display(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
