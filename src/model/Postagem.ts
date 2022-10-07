import Tema from "./Tema";

interface Postagem{
  id: number
  titulo: string
  texto: string
  data: Date
  tema?: Tema | null
}

export default Postagem