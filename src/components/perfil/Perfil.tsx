import { Avatar, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Usuario from '../../model/Usuario';
import { TokenState } from '../../store/tokens/tokenReducer';
import { buscaId } from '../../services/Service';
import './Perfil.css'

function Perfil() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  const userId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
  )

  const [usuario, setUsuario] = useState<Usuario>({
    id: +userId,
    nome: '',
    usuario: '',
    foto: '',
    senha: '',
  })

  async function getUserById(id: number) {
    await buscaId(`/usuarios/${id}`, setUsuario, {
      headers: {Authorization: token}
    })
  }

  useEffect(() => {
    getUserById(+userId)
  }, [])

  return (
    <>
      <Container>
        <div className='perfilContainer'>
          <Grid xs={3} alignItems='center' justifyContent='center' className='perfil'>
            <img src={usuario.foto} alt="" className='imgPerfil' />
            <Typography variant='h5' align='center' >{usuario.nome}</Typography>
          </Grid>
          <Grid xs={9} justifyContent='center' className='perfil'>
            <Typography variant='h4' align='center'>Postagens de {usuario.nome}</Typography>
            Você tem um total de {usuario.postagem?.length} postagens feitas

            {usuario.postagem?.map((post) => (
              <p>{post.titulo}</p>
            ))}


          </Grid>
        </div>
      </Container>
    </>
  );
}

export default Perfil;
