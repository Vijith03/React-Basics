
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

function App() {
  

  return (
    <>
     <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      
    </Routes>
     <Footer/>
    </>
  )
}

export default App
