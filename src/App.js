import React from 'react';
import './App.css';
import { MainContainer } from './containers';
import { Header, Menu } from './components';

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <MainContainer />
    </div>
  );
}

export default App;
