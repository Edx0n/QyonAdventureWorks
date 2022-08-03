import React from "react";
import { Button } from "@mui/material";

const deleteButton = ({ deleteFunction, id }) => {
  return (
    <button onClick={() => deleteFunction(id)} className="form-control">
      Deletar
    </button>
  );
};

export default deleteButton;
