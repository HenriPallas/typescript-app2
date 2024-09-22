import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rakenduste Programmeerimine
          </Typography>
            <Box>
                <Button component={NavLink} to="/" color="inherit">Home</Button>
                <Button component={NavLink} to="/aboutme" color="inherit">About Me</Button>
                <Button component={NavLink} to="/form" color="inherit">Login</Button>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}