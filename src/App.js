import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import useContentful from './components/useContentful';

function App() {
  const [jumps, setJumps] = useState([])
  const { getJumps } = useContentful()

  useEffect(() => {
    getJumps().then((response) => 
    console.log(response)
    // setJumps(response)
    )
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
