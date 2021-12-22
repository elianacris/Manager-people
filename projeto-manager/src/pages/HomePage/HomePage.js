import React from "react";
import Logo from '../../img/logo.png'
import { Buttons, Home } from "./styled";
import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { goToLogin, goToSignUp } from "../../router/coordinator";

const HomePage = () => {
    const history = useHistory()

    return (
        <Home>
            <img src={Logo} alt='logo' />
            <Buttons>
                <Button onClick={() => goToLogin(history)} variant="contained" color='secondary' >Login</Button>
                <Button onClick={() => goToSignUp(history)}
                    variant="contained"
                    color='secondary'>
                    Cadastro
                </Button>

            </Buttons>
        </Home>
    )
}
export default HomePage;