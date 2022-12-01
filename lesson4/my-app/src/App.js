import './App.css';
import Counter from './components/counter'; 
import ClassCounter from './components/classcounter';
// import light from './components/light/light';
function App() {
 
  return (
    <div className='App'>
            <Counter />
            <ClassCounter/>
            <light/>
        </div>
  );
}

export default App;
