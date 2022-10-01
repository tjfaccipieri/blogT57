import { Typography, Button } from '@material-ui/core';
import { Box, Grid, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={6} alignItems="center" justifyContent="center">
          <Box paddingX={20}>
            <form>
              <Typography variant="h2" align='center'>Entrar</Typography>

              <TextField
                id="usuario"
                label="Usuario"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                id="senha"
                label="Senha"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <Box display='flex' justifyContent='center' marginTop={2}>
                <Link to='/home' className='text-decoration-none'>
                  <Button type="submit" variant="contained" color="primary">
                    Entrar
                  </Button>
                </Link>
              </Box>
            </form>

            <Box display="flex" justifyContent='center' marginTop={2}>
            <Box marginRight={1}>
              <Typography variant='subtitle1'>Ainda não tem uma conta?</Typography>
            </Box>
              <Link to='/cadastro'>
                <Typography variant='subtitle1' align='center'>Cadastre-se</Typography>
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} className="bg-login"></Grid>
      </Grid>
    </>
  );
}

export default Login;
