import { Field } from "formik";
import React from "react";
import "./index.css";

const Input = ({
  label,
  name,
  onChange,
  onBlur,
  value,
  type,
  touched,
  errors,
}) => {
  return (
    <>
      <div class="mb-2">
        <label htmlFor={name}>{label}</label>
        <Field
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          type={type}
          className="form-control"
        />

        <span style={{ color: "red" }}>{touched && errors}</span>
      </div>
    </>
  );
};

export default Input;
