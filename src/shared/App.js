import React from 'react';
import { Route } from 'react-router-dom';
import { MainContainer, AnalysisContainer, StatisticsContainer, SummonerContainer } from 'pages';
import { Header, Menu, Footer } from 'components';

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Route exact path="/" component={MainContainer} />
      <Route path="/analysis" component={AnalysisContainer} />
      <Route path="/statistics" component={StatisticsContainer} />
      <Route path="/summoner" component={SummonerContainer} />
      <Footer />
    </div>
  );
}

export default App;
