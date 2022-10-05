import { Typography } from '@material-ui/core';
import { Box, Button, Grid, TextField } from '@mui/material';
import { ChangeEvent, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Usuario from '../../model/Usuario';
import { cadastroUsuario } from '../../services/Service';
import './CadastroUsuario.css';

function CadastroUsuario() {
  let navigate = useNavigate();

  const [confirmarSenha, setConfirmarSenha] = useState<String>('');

  function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value);
  }

  // One way binding
  const [user, setUser] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  });

  const [userResult, setUserResult] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  //  == > comparação basica => 2 = '2'
  //  === > comparação estrita => 2 != '2'

  async function cadastrar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (confirmarSenha === user.senha && user.senha.length >= 8) {
      try {
        await cadastroUsuario('usuarios/cadastrar', user, setUserResult);
        alert('Usuário criado com sucesso. Efetue seu login, por favor.');
      } catch (error) {
        alert('Falha ao cadastrar o usuário. Por favor, confira os campos');
      }
    } else {
      alert(
        'Senhas divergentes, ou menores que 8 caracteres. Por favor, verifique os campos.'
      );
    }
  }

  useEffect(() => {
    if (userResult.id !== 0) {
      navigate('/login');
    }
  }, [userResult]);

  return (
    <>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={6} className="bg-cadastro"></Grid>
        <Grid container xs={6} justifyContent="center">
          <Grid item xs={8} justifyContent="center">
            <form onSubmit={cadastrar}>
              <Typography variant="h2">Cadastre-se</Typography>

              <TextField
                required
                name="nome"
                value={user.nome}
                id="nome"
                label="Nome completo"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
              <TextField
                required
                name="usuario"
                value={user.usuario}
                id="usuario"
                label="Usuário (email)"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
              <TextField
                required
                name="foto"
                value={user.foto}
                id="foto"
                label="Foto (url)"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
              <TextField
                required
                name="senha"
                value={user.senha}
                id="senha"
                label="Senha"
                variant="outlined"
                fullWidth
                type="password"
                margin="normal"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
              <TextField
                required
                name="confirmarSenha"
                value={confirmarSenha}
                id="confirmarSenha"
                label="Confirmar senha"
                variant="outlined"
                fullWidth
                type="password"
                margin="normal"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  confirmarSenhaHandle(event)
                }
              />

              <Box display="flex" justifyContent="space-around" marginTop={2}>
                <Link to="/login" className="text-decoration-none">
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
  );
}

export default CadastroUsuario;
