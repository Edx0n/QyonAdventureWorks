import React from "react";
import "./index.css";
import { Link, Routes, Route } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Menu = () => {
  return (
    <>
      {}
      <div className="menuContainer">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/competidor">Competidores</Link>
          </li>
          <li>
            <Link to="/listacompetidor">Lista de Competidores</Link>
          </li>
          <li>
            <Link to="/historicocorrida">Histórico Corridas</Link>
          </li>
          <li>
            <Link to="/listahistoricocorrida">Lista de Histórico Corridas</Link>
          </li>
          <li>
            <Link to="/pistacorrida">Pistas de Corrida</Link>
          </li>
          <li>
            <Link to="/listapistacorrida">Lista de Pistas de Corrida</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
