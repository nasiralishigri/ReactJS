import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar , NavbarBrand} from 'reactstrap';
import './menuComponent.js';
import Menu from './menuComponent.js';
function App() {
  return (
    <div className="App">

      <Navbar dark color="primary">

<div className="container">
<NavbarBrand href="/">Still Confusion in ReactJS Dev</NavbarBrand>

</div>

      </Navbar>


     <Menu/>>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
