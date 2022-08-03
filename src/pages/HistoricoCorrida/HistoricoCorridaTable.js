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
import moment from "moment";

import jsonServerApi from "../../api/jsonServer";
import Title from "../../components/Title";
import DeleteButton from "../../components/DeleteButton";

const HistoricoCorridaTable = () => {
  const [historicoCorrida, setHistoricoCorrida] = useState([]);
  const [competidores, setCompetidores] = useState([]);
  const [pistacorridas, setPistaCorridas] = useState([]);

  const selectHistoricoCorrida = async () => {
    const { data } = await jsonServerApi.get("historicocorrida");
    setHistoricoCorrida(data);
  };

  const selectPistaCorrida = async () => {
    const { data } = await jsonServerApi.get("pistacorrida");
    setPistaCorridas(data);
  };

  const deleteHistoricoCorrida = async (id) => {
    await jsonServerApi.delete(`historicocorrida/${id}`);
    selectHistoricoCorrida();
  };

  const selectCompetidores = async () => {
    const { data } = await jsonServerApi.get("competitors");
    setCompetidores(data);
  };

  useEffect(() => {
    selectCompetidores();
    selectPistaCorrida();
    selectHistoricoCorrida();
  }, []);

  console.log({ historicoCorrida });
  return (
    <>
      <Title text="Lista de Histórico de Corrida" />

      <TableContainer component={Paper}>
        <Table aria-label="custom pagination table" className="table-container">
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row">
                Data da Corrida
              </TableCell>
              <TableCell component="th" scope="row">
                Competidor
              </TableCell>
              <TableCell component="th" scope="row">
                Pista Corrida
              </TableCell>
              <TableCell component="th" scope="row">
                Tempo Gasto
              </TableCell>
              <TableCell component="th" scope="row">
                Deletar
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {historicoCorrida.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {moment(item.datacorrida).format("DD/MM/YYYY")}
                </TableCell>
                <TableCell component="th" scope="row">
                  {
                    competidores.find(
                      (competidor) => competidor.id == item.competidor
                    )?.nome
                  }
                </TableCell>
                <TableCell component="th" scope="row">
                  {
                    pistacorridas.find(
                      (pistacorrida) => pistacorrida.id == item.pistacorrida
                    )?.descricao
                  }
                </TableCell>
                <TableCell component="th" scope="row">
                  {`${item.tempogasto}`}
                </TableCell>
                <TableCell component="th" scope="row">
                  <DeleteButton
                    deleteFunction={deleteHistoricoCorrida}
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

export default HistoricoCorridaTable;
