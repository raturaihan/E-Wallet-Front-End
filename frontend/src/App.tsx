import './styles/Styled.ts'
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Topup from './pages/Topup';
import Transfer from './pages/Transfer';
import Home from './pages/Home';
import ProtectedRoutes from './routes/ProtectedRoute';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/topup" element={<Topup />} />
          <Route path="/transfer" element={<Transfer />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
