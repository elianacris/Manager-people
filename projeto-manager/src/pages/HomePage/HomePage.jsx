import React from "react";
//import Logo from '../../img/logo.png'
import { Home } from "./styled";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToList } from "../../router/coordinator";
import "./style.css";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
const HomePage = () => {
  const history = useNavigate();

  return (
    <Home>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <AssignmentOutlinedIcon
          sx={{ width: "60px", height: "50px", color: "#c812e0e1" }}
        />
        <Typography
          className="frase"
          sx={{
            color: "var(--secondary-600, #19181fc7)",
            fontFamily: "Roboto",
            fontSize: "42px",
            fontStyle: "normal",
            fontWeight: 400,
          }}
        >
          People Manager
        </Typography>
      </Box>

      <Typography
        sx={{
          textAlign: "center",
          color: "var(--secondary-600, #19181fc7)",
          mb: "50px",
          mt: "50px",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "24px",
        }}
      >
        No mundo empresarial dinâmico de hoje, o gerenciamento eficaz de
        recursos humanos desempenha um papel crítico no sucesso de qualquer
        organização. É com grande prazer que apresentamos o Portal de
        Gerenciamento de Pessoas, uma plataforma inovadora projetada para
        simplificar e otimizar o processo de gerenciamento.
      </Typography>

      <Button
        onClick={() => goToList(history)}
        variant="contained"
        sx={{ background: "#ba68c8", ":hover": { background: "#c812e0e1" } }}
      >
        Clique Aqui
      </Button>
    </Home>
  );
};
export default HomePage;
