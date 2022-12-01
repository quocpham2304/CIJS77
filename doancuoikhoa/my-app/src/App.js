import { Routes, Route } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import Navbar from './components/Navbar';
import ShoppingCartContext from './context/ShoppingCartContext';

function App() {
  return (
<div>
  <ShoppingCartContext>
 <Navbar/>
  <Container className='mb-4'>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/store' element={<Store/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>
  </Container>
  </ShoppingCartContext>
</div>

 
  );
}

export default App;
