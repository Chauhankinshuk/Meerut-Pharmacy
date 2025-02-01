import { useState } from 'react'
import { Route, Routes ,NavLink,Link} from 'react-router-dom';
import  Home  from './pages/home';
import Collections from './pages/collections';
import About from './pages/about';
import Contact from './pages/contact';
import BecomeSeller from './pages/becomeSeller';
import Login from './pages/login';
import Cart from './pages/cart';
import Signup from './pages/signup';
import Nav from './components/nav';
import Footer from './components/footer';
import './App.css'
import SearchBar from './components/searchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>   
           <Nav></Nav>
           <SearchBar></SearchBar>
           <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/collections" element={<Collections/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/becomeSeller" element={<BecomeSeller/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/signup" element={<Signup/>}/>
          </Routes>   
          <Footer></Footer>
    </div>
  )
}

export default App
