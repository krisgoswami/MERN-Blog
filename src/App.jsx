import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Landing from './components/Landing';
import './App.css'

function App() {

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Router>
        <AppBar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
