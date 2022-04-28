import React from "react";
//import Logo from '../../img/logo.png'
import { Buttons, Home } from "./styled";
import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { goToList } from "../../router/coordinator";
import logo from '../../img/logo.png'

const HomePage = () => {
    const history = useHistory()

    return (
        <Home>
            <img src={logo} alt='logo'/>
            <Buttons>
                <Button onClick={() => goToList(history)}
                    variant="contained"
                    color='secondary'>
                    Click Here
                </Button>

            </Buttons>
        </Home>
    )
}
export default HomePage;