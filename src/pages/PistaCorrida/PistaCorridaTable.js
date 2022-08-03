import React, { useEffect, useState } from "react";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
} from "@mui/material";

import jsonServerApi from "../../api/jsonServer";
import Title from "../../components/Title";
import DeleteButton from "../../components/DeleteButton";

const PistaCorridaTable = () => {
  const [pistaCorrida, setPistaCorrida] = useState([]);

  const deletePistaCorrida = async (id) => {
    await jsonServerApi.delete(`pistacorrida/${id}`);
    selectPistaCorrida();
  };

  const selectPistaCorrida = async () => {
    const { data } = await jsonServerApi.get("pistacorrida");
    setPistaCorrida(data);
  };

  useEffect(() => {
    selectPistaCorrida();
  }, []);

  return (
    <>
      <Title text="Lista de pistas de corrida" />

      <TableContainer component={Paper}>
        <Table aria-label="custom pagination table" className="table-container">
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row">
                Descrição
              </TableCell>
              <TableCell component="th" scope="row">
                Deletar
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pistaCorrida.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.descricao}
                </TableCell>
                <TableCell component="th" scope="row">
                  <DeleteButton
                    deleteFunction={deletePistaCorrida}
                    id={item.id}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PistaCorridaTable;
