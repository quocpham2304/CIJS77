import './App.css';
import Tabs from './components/tab/tab';
import Menu from './components/menu/menu';
import Home from './components/home/home';
import { useContext } from 'react';
import { AddContext, AddProvider } from './components/addContext/addContext';


function App() {
  const add =useContext(AddContext)
  return (
    <AddProvider>
    <div className="App">
      <Tabs/>
      <Home/>
      <Menu/>
    </div>
    </AddProvider>
    //  <div className="App">
    //  <Routes>
    //      <Route path="/" element={<Home />} />
    //      <Route path="/tab" element={<Tabs />} />
    //      <Route path="/products" element={<Static/>} />
    //    </Routes>
    //  </div>
    
  );
}

export default App;
