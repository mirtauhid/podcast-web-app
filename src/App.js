import React from 'react';
import './App.css';
import Login from './Login'
import Player from './Player';

function App() {

  const auth = true;

  return (
    <div>
      {!auth && <Login />}
      {auth && <Player  />}
    </div>
  );
}

export default App;
