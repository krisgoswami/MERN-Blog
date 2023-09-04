import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Landing from './components/Landing';
import './App.css'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Blogs from './pages/blogs';
import MyBlogs from './pages/MyBlogs';

function App() {

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Provider store={store}>
        <Router>
          <AppBar />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/my-blogs' element={<MyBlogs />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  )
}

export default App
