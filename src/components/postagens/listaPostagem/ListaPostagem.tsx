import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Postagem from '../../../model/Postagem';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokenReducer';
import './listaPostagem.css'

function ListaPostagem(props: any) {
  let navigate = useNavigate();

  const [postagens, setPostagens] = useState<any[]>([]);

  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  );

  const userId = useSelector<TokenState, TokenState['id']>((state) => state.id);

  let filter = props.inputText

    console.log()

  


  useEffect(() => {
    if (token === '') {
      alert('Ai não meu bom');
      navigate('/login');
    }
  }, [token]);

  async function getPostagem() {
    await busca('/postagens', setPostagens, {
      headers: { Authorization: token },
    });
  }

  useEffect(() => {
    getPostagem();
  }, [postagens.length]);

  return (
    <>
    {postagens.length === 0 ? (<div className="spinner"></div>): (
      postagens.filter((post) => {
        return(
          post.titulo.includes(filter)
        )
      }).map((postagem) => (
        <Box marginX={20} m={2} key={postagem.id} className='boxPost' border={1} borderRadius={5} justifySelf='flex-start'>
          <Card className='cardPost'>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Postagens
              </Typography>
              <Typography variant="h5" component="h2">
                {postagem.titulo}
              </Typography>
              <Typography variant="body2" component="p">
                {postagem.texto}
              </Typography>
              <Typography variant="body2" component="p">
                {postagem.tema?.descricao}
              </Typography>
              <Typography variant="body2" component="p">
                Postado por: {postagem.usuario?.nome}
              </Typography>
            </CardContent>
            <CardActions>
            
            {postagem.usuario?.id === +userId ? (
              <Box display="flex" justifyContent="center" mb={1.5}>
                  <Link
                    to={`/editarPost/${postagem.id}`}
                    className="text-decoration-none"
                  >
                    <Box mx={1}>
                      <Button variant="contained" size="small" color="primary">
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link
                    to={`/apagarPost/${postagem.id}`}
                    className="text-decoration-none"
                  >
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
            ) : (
              <Box display="flex" justifyContent="center" mb={1.5}>
                  
                    <Box mx={1}>
                      <Button variant="contained" size="small" color="primary" disabled>
                        atualizar
                      </Button>
                    </Box>
                  
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                        disabled
                      >
                        deletar
                      </Button>
                    </Box>
                  
                </Box>
            )}

                
            
            </CardActions>
          </Card>
        </Box>
      ))
    )}

    {/* {filteredList.map((post) => (
      // <p>{post.titulo}</p>
    ))} */}
    </>
  );
}

export default ListaPostagem;
