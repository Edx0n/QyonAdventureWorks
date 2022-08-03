import React, { useState, useEffect } from "react";
import { Formik, Field } from "formik";
import jsonServerApi from "../../api/jsonServer";
import moment from "moment";
import axios from "axios";
import SubmitButton from "../../components/SubmitButton";
import InputSelect from "../../components/InputSelect";
import Input from "../../components/Input";

const HistoricoCorrida = () => {
  const [competidores, setCompetidores] = useState([]);
  const [pistacorrida, setPistaCorrida] = useState([]);

  const selectPistaCorrida = async () => {
    const { data } = await jsonServerApi.get("pistacorrida");
    setPistaCorrida(data);
  };

  const selectCompetidores = async () => {
    const { data } = await jsonServerApi.get("competitors");
    setCompetidores(data);
  };

  useEffect(() => {
    selectCompetidores();
    selectPistaCorrida();
  }, []);

  const validate = (values) => {
    const errors = {};

    const requiredFields = [
      "datacorrida",
      "competidor",
      "pistacorrida",
      "tempogasto",
    ];

    requiredFields.forEach((requiredField) => {
      if (!values[requiredField]) {
        errors[requiredField] = "Campo obrigatório";
      }
    });

    if (parseInt(values.tempogasto) < 0) {
      errors.tempogasto = "Digite um tempo válido";
    }

    if (moment(values.datacorrida) > moment()) {
      errors.datacorrida = "Data inválida!";
    }

    return errors;
  };

  return (
    <div>
      <h1 style={{ color: "red" }}></h1>

      <Formik
        initialValues={{
          datacorrida: null,
          tempogasto: 0,
          pistacorrida: 0,
          competidor: 0,
        }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          console.log("values", values);
          jsonServerApi.post("/historicocorrida", values);
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
              name="datacorrida"
              value={values.datacorrida}
              onChange={handleChange}
              onBlur={handleBlur}
              type="date"
              touched={touched.datacorrida}
              errors={errors.datacorrida}
              label="Data da Corrida"
            />

            <InputSelect
              name="competidor"
              label="Competidor"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.competidor}
              valueList={competidores}
              as="select"
            />

            <InputSelect
              name="pistacorrida"
              label="Pista Corrida"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.pistacorrida}
              valueList={pistacorrida}
              as="select"
            />

            <Input
              name="tempogasto"
              onChange={handleChange}
              onBlur={handleBlur}
              type="time"
              touched={touched.tempogasto}
              errors={errors.tempogasto}
              value={values.tempogasto}
              label="Tempo Gasto"
            />

            <SubmitButton isSubmitting={isSubmitting} />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default HistoricoCorrida;
