import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Analysis, Statistics, Summoner } from 'pages';
import { Header, Menu, Footer } from 'components';

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Route exact path="/" component={Home} />
      <Route path="/analysis" component={Analysis} />
      <Route path="/statistics" component={Statistics} />
      <Route path="/summoner" component={Summoner} />
      <Footer />
    </div>
  );
}

export default App;