import Postagem from "./Postagem";

interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string
  postagem?: Postagem[]
}

export default Usuario