import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import CompetidorForm from "./pages/Competidor/CompetidorForm";
import CompetidorTable from "./pages/Competidor/CompetidorTable";
import HistoricoCorridaForm from "./pages/HistoricoCorrida/HistoricoCorridaForm";
import PistaCorridaForm from "./pages/PistaCorrida/PistaCorridaForm";
import PistaCorridaTable from "./pages/PistaCorrida/PistaCorridaTable";
import HistoricoCorridaTable from "./pages/HistoricoCorrida/HistoricoCorridaTable";
import Menu from "./components/menu";
import { Grid } from "@mui/material";

function App() {
  return (
    <>
      <Menu />

      <Grid container className="app-container">
        <Routes>
          <Route path="competidor" element={<CompetidorForm />} />
          <Route path="listacompetidor" element={<CompetidorTable />} />
          <Route path="historicocorrida" element={<HistoricoCorridaForm />} />
          <Route
            path="listahistoricocorrida"
            element={<HistoricoCorridaTable />}
          />
          <Route path="pistacorrida" element={<PistaCorridaForm />} />
          <Route path="listapistacorrida" element={<PistaCorridaTable />} />
        </Routes>
      </Grid>
    </>
  );
}

export default App;
