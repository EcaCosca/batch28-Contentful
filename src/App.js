import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import useContentful from './components/useContentful';
import Jumps from './components/Jumps';
import {Routes, Route} from 'react-router-dom'

function App() {
  const [jumps, setJumps] = useState([])
  const { getJumps } = useContentful()

  useEffect(() => {
    getJumps().then((response) => 
    // console.log(response)
    setJumps(response)
    )
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/jumps" element={<Jumps jumps={jumps}/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
