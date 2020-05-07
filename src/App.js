import React from 'react';
import './App.css';
import { MainContainer } from './containers';
import { Header, Menu, Footer } from './components';

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
