import React from "react";
import {GroupContainer,FormInputContainer,FormInputLabel } from  "./form-input.style";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer
        onChange={handleChange}
        {...otherProps}
      ></FormInputContainer>
      {label ? (
        <FormInputLabel
          className={`${
            otherProps.value.length ? "shrink" : ""
          }`}
        >
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
