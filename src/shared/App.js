import React from 'react';
import { Route } from 'react-router-dom';
import { MainContainer, SummonerContainer } from 'pages';
import { Header, Menu, Footer } from 'components';

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Route exact path="/" component={MainContainer} />
      <Route path="/summoner" component={SummonerContainer} />
      <Footer />
    </div>
  );
}

export default App;
