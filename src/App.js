
import './App.css';
import About from './components/about';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
  <Navbar title="TextUtils"/>
      <div className="container my-4">
       <Textform heading="Try these buttons and have fun " />  
        <About/>
      </div>
    </>
  );
}

export default App;
