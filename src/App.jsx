import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar'
import Login from './components/Login'
import './App.css'
import SignUp from './components/SignUp';

function App() {

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Router>
        <AppBar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
