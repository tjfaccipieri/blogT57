import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import CadastroUsuario from './paginas/cadastro/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';

function App() {
  return (
    <BrowserRouter>
      
        <Navbar />

        <div style={{minHeight: '100vh'}}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/posts" element={<ListaPostagem />} />
          </Routes>
        </div>
        
        <Footer />
      
    </BrowserRouter>
  );
}

export default App;
