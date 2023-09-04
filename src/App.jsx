import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Landing from './pages/Landing';
import './App.css'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Blogs from './pages/blogs';
import MyBlogs from './pages/MyBlogs';
import CreateBlog from './pages/CreateBlog';
import { Toaster } from 'react-hot-toast';
import BlogDetails from './pages/BlogDetails';

function App() {

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Provider store={store}>
        <Router>
          <AppBar />
          <Toaster />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/my-blogs' element={<MyBlogs />} />
            <Route path='/create-blog' element={<CreateBlog />} />
            <Route path='/blog-details/:id' element={<BlogDetails />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  )
}

export default App
