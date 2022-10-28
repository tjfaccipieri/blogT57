import { Typography, Button, Hidden, InputAdornment } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Box, Grid, TextField } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UsuarioLogin from '../../model/UsuarioLogin';
import { login } from '../../services/Service';
import { addToken, addId } from '../../store/tokens/action';
import './Login.css';

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');

  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: '',
  });

  const [respUserLogin, setRespUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: '',
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(() => {
    if (
      userLogin.usuario !== '' &&
      userLogin.senha !== '' &&
      userLogin.senha.length >= 8
    ) {
      setForm(true);
    }
  }, [userLogin]);

  const [form, setForm] = useState(false);

  async function conectar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await login('usuarios/logar', userLogin, setRespUserLogin);
      toast.success('Usuario conectado. tamo juntão', {
        theme: 'colored',
        autoClose: 2000,
        hideProgressBar: true,
      });
    } catch (error) {
      toast.error(`Deu ruim.`, {
        theme: 'colored',
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  }

  useEffect(() => {
    if (token !== '') {
      dispatch(addToken(token));
      navigate('/home');
    }
  }, [token]);

  //metodo para pegar o token e o id do json e guardar no redux
  useEffect(() => {
    if (respUserLogin.token !== '') {
      dispatch(addToken(respUserLogin.token));
      dispatch(addId(respUserLogin.id.toString()));
      navigate('/home');
    }
  }, [respUserLogin.token]);



  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} md={6} alignItems="center" justifyContent="center">
          <Box paddingX={20}>
            <form onSubmit={conectar}>
              <Typography variant="h2" align="center">
                Entrar
              </Typography>

              <TextField
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
                value={userLogin.usuario}
                id="usuario"
                name="usuario"
                label="Usuário"
                fullWidth
                margin="normal"
                variant="outlined"
                className="teste"
              />
              <TextField
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
                value={userLogin.senha}
                id="senha"
                name="senha"
                label="Senha"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
              />


              <Box display="flex" justifyContent="center" marginTop={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!form}
                >
                  Entrar
                </Button>
              </Box>
            </form>

            <Box display="flex" justifyContent="center" marginTop={2}>
              <Box marginRight={1}>
                <Typography variant="subtitle1">
                  Ainda não tem uma conta?
                </Typography>
              </Box>
              <Link to="/cadastro">
                <Typography variant="subtitle1" align="center">
                  Cadastre-se
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          md={6}
          className="bg-login"
          display={{ xs: 'none', md: 'block' }}
        ></Grid>
      </Grid>
    </>
  );
}

export default Login;
