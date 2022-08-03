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

const CompetidorTable = () => {
  const [competidor, setCompetidor] = useState([]);

  const selectCompetidor = async () => {
    const { data } = await jsonServerApi.get("competitors");
    setCompetidor(data);
  };

  const deleteCompetidor = async (id) => {
    await jsonServerApi.delete(`competitors/${id}`);
    selectCompetidor();
  };

  useEffect(() => {
    selectCompetidor();
  }, []);

  const sexos = { M: "Masculino", F: "Feminino", O: "Outros" };

  return (
    <>
      <Title text="Lista de competidores" />

      <TableContainer component={Paper}>
        <Table aria-label="custom pagination table" className="table-container">
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row">
                Nome
              </TableCell>
              <TableCell component="th" scope="row">
                Sexo
              </TableCell>
              <TableCell component="th" scope="row">
                Temperatura
              </TableCell>
              <TableCell component="th" scope="row">
                Peso
              </TableCell>
              <TableCell component="th" scope="row">
                Altura
              </TableCell>
              <TableCell component="th" scope="row">
                Deletar
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {competidor.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.nome}
                </TableCell>
                <TableCell component="th" scope="row">
                  {sexos[item.sexo]}
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.temp}
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.peso}
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.alt}
                </TableCell>
                <TableCell component="th" scope="row">
                  <DeleteButton
                    deleteFunction={deleteCompetidor}
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

export default CompetidorTable;
