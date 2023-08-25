import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider }from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1 className="text-4xl font-bold">Inicio</h1>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create-article" element={<h1 className="text-4xl font-bold">Crear articulo</h1>} />
            <Route path="/find-article" element={<h1 className="text-4xl font-bold">Buscar articulo por id</h1>} />
            <Route path="/update-article" element={<h1 className="text-4xl font-bold">Actualizar un articulo</h1>} />
            <Route path="/list-articles" element={<h1 className="text-4xl font-bold">Listar todos los articulos</h1>} />
            <Route path="/delete-article" element={<h1 className="text-4xl font-bold">Eliminar articulo</h1>} />
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  )
}

export default App
