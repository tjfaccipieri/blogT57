import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Postagem from '../../../model/Postagem';
import Tema from '../../../model/Tema';
import Usuario from '../../../model/Usuario';
import { busca, buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokenReducer';

function CadastroPostagem() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const [temas, setTemas] = useState<Tema[]>([]);

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: '',
  });

  //Buscar o ID dentro do REDUX
  const userId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
  )

  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: '',
    texto: '',
    data: '',
    tema: null,
    usuario: null //linha adicionada para inserir o usuário dono na postagem
  });

  //State que vai controlar o usuário que será inserido na postagem
  const [usuario, setUsuario] = useState<Usuario>({
    id: +userId,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (token === '') {
      alert('Ai não meu bom');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
      usuario: usuario //adicionar o usuário dentro da postagem que está sendo enviada para o backend
    });
  }, [tema]);

  async function findByIdPostagem(id: string) {
    await buscaId(`postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getTemas();
    if (id !== undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  async function getTemas() {
    await busca('/temas', setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedPostagem(event: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [event.target.name]: event.target.value,
      tema: tema,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await put(`/postagens`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });
        alert('Postagem atualizada com sucesso');
      } catch (error) {
        alert('Erro ao atualizar, verifique os campos');
      }
    } else {
      try {
        await post(`/postagens`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });
        alert('Postagem cadastrada com sucesso');
      } catch (error) {
        alert('Erro ao cadastrar, verifique os campos');
      }
    }
    navigate('/posts');
  }

  return (
    <>
      <Container>
        <form onSubmit={onSubmit}>
          <Typography
            variant="h3"
            color="textSecondary"
            component="h1"
            align="center"
          >
            Formulário de cadastro postagem
          </Typography>

          <TextField
            value={postagem.titulo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
            id="titulo"
            label="titulo"
            variant="outlined"
            name="titulo"
            margin="normal"
            fullWidth
          />

          <TextField
            value={postagem.texto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
            id="texto"
            label="texto"
            name="texto"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <FormControl fullWidth variant="standard">
            <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>

            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              onChange={(e) =>
                buscaId(`/temas/${e.target.value}`, setTema, {
                  headers: {
                    Authorization: token,
                  },
                })
              }
            >
              {temas.map((item) => (
                <MenuItem value={item.id} style={{ display: 'block' }}>
                  {item.descricao}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Escolha um tema para a postagem</FormHelperText>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={tema.id === 0}
            >
              Finalizar
            </Button>
          </FormControl>
        </form>
      </Container>
    </>
  );
}

export default CadastroPostagem;
