import React from "react";
import { Formik, Field } from "formik";
import jsonServerApi from "../../api/jsonServer";
import SubmitButton from "../../components/SubmitButton";
import Input from "../../components/Input";
import Title from "../../components/Title";

const PistaCorridaForm = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.descricao) {
      errors.descricao = "Campo obrigatório";
    }

    return errors;
  };

  return (
    <div>
      <Title text="Pistas de Corrida" />

      <Formik
        initialValues={{ descricao: "" }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          jsonServerApi.post("/pistacorrida", values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Input
              name="descricao"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.descricao}
              errors={errors.descricao}
              label="Descrição da Pista"
            />
            <SubmitButton isSubmitting={isSubmitting} />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default PistaCorridaForm;
