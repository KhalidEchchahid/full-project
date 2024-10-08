import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";

import Dashboard from "scenes/dashboard";
import Students from "scenes/students/Students";
import Professors from "scenes/professors/Professors";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/students" element={<Students/>} />
              <Route path="/professors" element={<Professors/>} />
            </Route> 
          </Routes>
        </ThemeProvider>
      </BrowserRouter>

  );
}

export default App;