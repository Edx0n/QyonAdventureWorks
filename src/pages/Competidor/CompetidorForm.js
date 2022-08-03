import React from "react";
import { Formik, Field } from "formik";
import { Grid } from "@mui/material";
import jsonServerApi from "../../api/jsonServer";
import SubmitButton from "../../components/SubmitButton";
import Input from "../../components/Input";
import InputSelect from "../../components/InputSelect";
import Title from "../../components/Title";

const CompetidorForm = () => {
  const validate = (values) => {
    const errors = {};

    const requiredFields = ["nome", "temp", "peso", "alt", "sexo"];
    requiredFields.forEach((requiredField) => {
      if (!values[requiredField]) {
        errors[requiredField] = "Campo obrigatório";
      }
    });

    if (values.temp <= 35 || values.temp > 38) {
      errors.temp = "Você está doente, não pode correr";
    }

    if (values.peso < 0) {
      errors.peso = "Digite um peso válido";
    }

    if (values.alt < 0) {
      errors.alt = "Digite uma altura válida";
    }

    console.log(errors);
    return errors;
  };

  const sexos = [
    { id: "M", nome: "Masculino" },
    { id: "F", nome: "Feminino" },
    { id: "O", nome: "Outros" },
  ];

  return (
    <div>
      <Title text="Competidores" />

      <Formik
        initialValues={{ nome: "", sexo: "M", temp: 0, peso: 0, alt: 0 }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          console.log("values");
          jsonServerApi.post("/competitors", values);
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
              name="nome"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.nome}
              errors={errors.nome}
              label="Nome"
            />

            <InputSelect
              name="sexo"
              label="Sexo"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.sexo}
              valueList={sexos}
              as="select"
            />

            <Input
              name="temp"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.temp}
              errors={errors.temp}
              label="Temperatura"
            />

            <Input
              name="peso"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.peso}
              errors={errors.peso}
              label="Peso KG"
            />

            <Input
              name="alt"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.alt}
              errors={errors.alt}
              label="Altura"
            />
            <SubmitButton isSubmitting={isSubmitting} />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CompetidorForm;
