import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { goToHome } from '../../router/coordinator';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='secondary'>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        onClick={() => goToHome(history)}>
                        Manager People

                    </IconButton>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Header;