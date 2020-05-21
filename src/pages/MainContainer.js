import React, { useEffect } from 'react';
import { MainWrapper, Logo, SearchForm, Advertisement } from 'components';

const MainContainer = () => {

  useEffect(() => {
    document.title = "롤 전적 검색 - NERG.GG";
  }, []);

  return (
    <MainWrapper>
      <Logo />
      <SearchForm />
      <Advertisement />
    </MainWrapper>
  )
}

export default MainContainer;