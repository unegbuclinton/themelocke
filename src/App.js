import './App.css';
import Navbar from './components/navbar/Navbar';
import Analytics from './pages/Analytics/Analytics';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='body__content'>
        <Analytics />
       
      </div>
    </div>
  );
}

export default App;
