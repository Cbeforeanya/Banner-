// import logo from './logo.svg';
import React from 'react';
import './App.css';
import InternalDashboard from './internal-dashboard';

function App() {

  const [toggle, setToggle] = React.useState(true);
  const [show, setShow] = React.useState(true);
  const [timer,setTimer] = React.useState(10000);

  const handleToggle = (val) => {
    if(val === true){
      setShow(true);
      setTimer(10000);
    }
    setToggle(val);
  }

  setTimeout(() => {
    setShow(false);
    setToggle(false);
  },timer)

  return (
    <>
      <div className="banner" style={!toggle || !show ? { "visibility": 'hidden' } : { "visibility": 'visible' }}>

        <h1>Welcome to My Website</h1>
        <p>We are glad to have you here - <a href='https://google.com' target="_blank" rel="noreferrer">Link</a></p>
      </div>
      <InternalDashboard timer={timer} handleToggle={handleToggle}></InternalDashboard>
    </>
  );
}

export default App;
