import { Field } from "formik";
import React from "react";

const InputSelect = ({
  label,
  name,
  onChange,
  onBlur,
  value,
  valueList,
  touched,
  errors,
}) => {
  return (
    <div className="mb-2">
      <label htmlFor={name}>{label}</label>
      <Field
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        as="select"
        className="form-control"
      >
        <option key={0} value={0}>
          Selecionar
        </option>
        {valueList.map((item) => (
          <option key={item.id} value={item.id}>
            {item.nome || item.descricao}
          </option>
        ))}
      </Field>
      {touched && errors}
    </div>
  );
};

export default InputSelect;
