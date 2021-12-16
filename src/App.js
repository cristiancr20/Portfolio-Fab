import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className='Home'>
      <Card ></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
    </>
  );
}

export default App;
