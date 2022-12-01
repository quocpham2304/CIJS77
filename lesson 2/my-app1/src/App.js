import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='album'>
        <div className='col'>
        <Card name="co choi co chiu" artist="karik" time="2 ngày" />
       <Card name="sao cung duoc" artist="thanh dat"  time="3 ngày" />
       <Card name="ky vong sai lam" artist="tang phuc"  time="5 ngày" />
        </div>
        <div className='col'>
        <Card name="co choi co chiu" artist="karik" time="2 ngày" />
       <Card name="sao cung duoc" artist="thanh dat"  time="3 ngày" />
       <Card name="ky vong sai lam" artist="tang phuc"  time="5 ngày" />
        </div>
        <div className='col'>
        <Card name="co choi co chiu" artist="karik" time="2 ngày" />
       <Card name="sao cung duoc" artist="thanh dat"  time="3 ngày" />
       <Card name="ky vong sai lam" artist="tang phuc"  time="5 ngày" />
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
