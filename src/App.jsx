import React from 'react'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import About from './pages/About'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/about' element={<About/>}/> 
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Cart' element={<Cart/>}/>

     
    </Routes>
    </BrowserRouter>
  )
}

export default App