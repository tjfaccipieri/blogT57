import Postagem from "./Postagem";

interface Tema {
  id: number;
  descricao: string;
  postagem?: Postagem[] | null
}

export default Tema