import { Routes, Route } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import Navbar from './components/Navbar';
import Register from './login/register';
import Login from './login/login';
import ShoppingCartProvider from './context/ShoppingCartContext';

function App() {
  return (
<div>
  <ShoppingCartProvider>
 <Navbar/>
  <Container className='mb-4'>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/store' element={<Store/>}/>
    <Route path='/about' element={<About/>}/>

    {/*Phần Phương thêm vào */}
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    
  </Routes>
  </Container>
  </ShoppingCartProvider>
</div>

 
  );
}

export default App;
