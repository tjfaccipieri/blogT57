import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';

function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Box style={{ cursor: 'pointer' }}>
            <Typography variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>

          <Box display="flex" justifyContent="flex-end">
            <Box mx={1} style={{ cursor: 'pointer' }}>
              <Typography variant="h6" color="inherit">
                home
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: 'pointer' }}>
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: 'pointer' }}>
              <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: 'pointer' }}>
              <Typography variant="h6" color="inherit">
                cadastrar tema
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: 'pointer' }}>
              <Typography variant="h6" color="inherit">
                logout
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
