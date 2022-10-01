import { Typography } from '@material-ui/core'
import { Box, Button, Grid, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import './CadastroUsuario.css'

function CadastroUsuario() {
  return (
    <>
      <Grid container alignItems='center' justifyContent='center'>
        <Grid item xs={6} className='bg-cadastro'></Grid>
        <Grid container xs={6} justifyContent='center'>
          
          <Grid item xs={8} justifyContent='center'>
            <form>
              <Typography variant='h2'>Cadastre-se</Typography>

              <TextField
                id="nome"
                label="Nome completo"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                id="usuario"
                label="Usuário (email)"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                id="foto"
                label="Foto (url)"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                id="senha"
                label="Senha"
                variant="outlined"
                fullWidth
                type='password'
                margin="normal"
              />
              <TextField
                id="confirmarSenha"
                label="Confirmar senha"
                variant="outlined"
                fullWidth
                type='password'
                margin="normal"
              />

              <Box display='flex' justifyContent='space-around' marginTop={2}>
                <Link to='/login' className='text-decoration-none'>
                  <Button type="submit" variant="contained" color="secondary">
                    Cancelar
                  </Button>
                </Link>
                  <Button type="submit" variant="contained" color="primary">
                    Cadastrar
                  </Button>
              </Box>
            </form>
          </Grid>
          
        </Grid>

      </Grid>
    </>
  )
}

export default CadastroUsuario