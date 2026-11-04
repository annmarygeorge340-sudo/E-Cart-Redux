
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './Pages/Products'
import View from './Pages/View'
import Whishlist from './Pages/Whishlist'
import Cart from './Pages/Cart'
import PageNotFound from './Pages/PageNotFound'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {
  

  return (
    <>
    <Header/>
     <Routes>
     <Route  path='/' element={<Products/>}/>
      <Route  path='/Products/:id' element={<View/>}/>
       <Route  path='/Whishlist' element={<Whishlist/>}/>
        <Route  path='/Cart' element={<Cart/>}/>
         <Route  path='/*' element={<PageNotFound/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
