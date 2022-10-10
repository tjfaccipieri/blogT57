import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../model/Tema';
import { busca } from '../../../services/Service';

function ListaTemas() {
  //trazer a função de navegação interna
  let navigate = useNavigate();

  // estado para gerenciar os temas que virão do backend
  const [temas, setTemas] = useState<Tema[]>([]);

  // trazer o token do navegador para dentro do blog
  const [token, setToken] = useLocalStorage('token');

  //verificar se a pessoa tem token, se não tiver, mandar pra login
  useEffect(() => {
    if (token === '') {
      alert('Ai não meu bom');
      navigate('/login');
    }
  }, [token]);

  //ta dando um get nos temas...se tiver, vai vir
  async function getTemas() {
    await busca('/temas', setTemas, {
      headers: { Authorization: token },
    });
  }

  //função para disparar a busca de temas assim que a tela for carregada
  useEffect(() => {
    getTemas();
  }, [temas.length]);

  return (
    <>
      <Container>
        {/* mapeamento do array de temas, para recriar a estrutura inteira para cada tema existente */}
        {temas.map((tema) => (
          <Box m={2} key={tema.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Tema
                </Typography>
                <Typography variant="h5" component="h2">
                  Tema {tema.id} - {tema.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>
                  <Link
                    to={`/atualizarTema/${tema.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        className="marginLeft"
                        size="small"
                        color="primary"
                      >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/apagarTema/${tema.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                      >
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Container>
    </>
  );
}

export default ListaTemas;
