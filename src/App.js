
import React, { useState } from 'react';
import './App.css';
import About from './components/about';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
  

function App() {
  const[Mode, setMode]= useState('light');// state varaiable wehether dark mode is enabled or not \
  const[alert, setAlert] = useState(null);// state variable to store an alert message
  
  const showAlert = (message,type)=>{
setAlert({
  message:message,
  type:type
})
setTimeout(() => {
  setAlert(null)
},1500)
  }

  const toggleMode= ()=>{
    if (Mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white'
      showAlert("Dark mode has enabled", "success")

    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has enabled", "success")

    }
  }
  return (
    <>
    <Router>
  <Navbar title="TextUtils" Mode={Mode} toggleMode={toggleMode}/>
  
      <div className="container my-4">
      <Alert alert={alert}/>
      <Routes>
     
          <Route exact path="/about" element={<About mode={Mode} toggleMode={toggleMode}/>}/>
         
          <Route
  path="/"
  element={<Textform heading="Try these buttons and have fun" mode={Mode} toggleMode={toggleMode} />}
/>

           </Routes>
      
        {/* <About mode={Mode} toggleMode={toggleMode}/> */}
      </div>
      </Router>
    </>
  );
}

export default App;
