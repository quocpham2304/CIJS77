import React from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import useModal from './components/useModal/useModal';

const App = () => {
  const {isShowing, toggle} = useModal();
  return (
    <div className="App">
      <button className="button-default" onClick={toggle}>your cart</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
};

export default App;
