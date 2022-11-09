import './styles/Styled.ts'
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Topup from './pages/Topup';
import Transfer from './pages/Transfer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/topup" element={<Topup />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
