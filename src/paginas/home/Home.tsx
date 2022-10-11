import { Box, Button, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import TabPostagens from '../../components/postagens/tabPostagens/TabPostagens';
import { TokenState } from '../../store/tokens/tokenReducer';
import './Home.css';


function Home() {

  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  useEffect(() => {
    if (token === '') {
      alert('Ai não meu bom')
      navigate('/login')
    }
  }, [token])


  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3F51B5" }}>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Ver Postagens</Button>
          </Box>

        </Grid>
        <Grid item xs={6} >
          <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}>
        </Grid>
      </Grid>

      <Grid container justifyContent='center' alignItems='center'>
        <TabPostagens />
      </Grid>
    </>
  );
}

export default Home;
