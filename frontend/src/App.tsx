import './styles/Styled.ts'
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Topup from './pages/Topup';
import Transfer from './pages/Transfer';
import Home from './pages/Home';
import ProtectedRoutes from './routes/ProtectedRoute';
import NotFound from './pages/NotFound';
import UnprotectedRoutes from './routes/UnprotectedRoute';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<UnprotectedRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/topup" element={<Topup />} />
          <Route path="/transfer" element={<Transfer />} />
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
