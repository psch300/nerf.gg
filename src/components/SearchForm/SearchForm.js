import React from 'react';
import './SearchForm.css'

const SearchForm = () => {
  return (
    <form className="SearchForm" action="/summoner" method="get">
      <input className="searchform-text" type="text" name="userName" placeholder="소환사명을 입력하세요." />
      <button className="searchform-button" type="submit">GO</button>
    </form>
  )
}

export default SearchForm;