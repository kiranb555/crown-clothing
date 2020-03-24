import React from "react";
import SignIn from "../../components/sign-in/sign-in.component.jsx";
import SignUp from "../../components/sign-up/sign-up.component.jsx";

import { SignInAndSignUpHolder } from './sign-in-and-sign-up.styles.jsx';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpHolder>
    <SignIn />
    <SignUp />
  </SignInAndSignUpHolder>
);

export default SignInAndSignUpPage;
