import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import CadastroUsuario from './paginas/cadastro/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';

function App() {
  return (
    <BrowserRouter>
      
        <Navbar />

        <div style={{minHeight: '80vh'}}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />

            <Route path="/home" element={<Home />} />

            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/cadastroTema" element={<CadastroTema />} />
            <Route path="/atualizarTema/:id" element={<CadastroTema />} />
            <Route path="/apagarTema/:id" element={<DeletarTema />} />

            <Route path="/posts" element={<ListaPostagem />} />
            <Route path="/editarPost/:id" element={<CadastroPostagem />} />
          </Routes>
        </div>
        
        <Footer />
      
    </BrowserRouter>
  );
}

export default App;
