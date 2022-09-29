import { Button, Paper } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';

// import purple from '@material-ui/core/colors/purple';

// const roxin = purple[500]

function Home() {
  return (
    <>
      <Paper>
        <Box p={2}>
          <Box display="flex" justifyContent="center">
            <h1>Título</h1>
          </Box>
          <img
            src="https://i.imgur.com/wUf1NUF.png"
            alt=""
            className="imagem"
          />
          <Box display="flex" justifyContent="center" p={2}>
            <Button variant="contained" color="primary">
              Texto 1
            </Button>
            <Button variant="contained" color="secondary">
              Texto 2
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export default Home;
