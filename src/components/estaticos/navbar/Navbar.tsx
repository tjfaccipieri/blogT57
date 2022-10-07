import { AppBar, Toolbar, Box, Typography, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>

          <Grid container justifyContent="flex-end">
            <Box display="flex" justifyContent="start">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Box>

              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Postagens
                </Typography>
              </Box>

              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Temas
                </Typography>
              </Box>

              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Cadastrar Temas
                </Typography>
              </Box>

              <Box mx={1} className="cursor">
                <Link to="/login" className="logout">
                  <Typography variant="h6" color="inherit">
                    Logout
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
