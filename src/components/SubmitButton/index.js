import React from "react";
import { Button } from "@mui/material";

const SubmitButton = ({ isSubmitting }) => {
  return (
    <>
      <Button variant="outlined" type="submit" className="mt-3">
        {isSubmitting ? "Enviado" : "Enviar"}
      </Button>
    </>
  );
};

export default SubmitButton;
