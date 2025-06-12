import React from 'react';
import Container  from '@mui/material/Container';
import AppBar  from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CreateTask } from './CreateTask';

export const Home = () => {
    return (
        <div>
        <Container>
        <AppBar position="static" sx={{ bottom: 'auto', top: 0 }}>
            <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
                Task Manager
            </Typography>
            <CreateTask />
            </Toolbar>
        </AppBar>
        </Container>
        </div>
    )
}

