import React from 'react';
import './SearchForm.css'

const SearchForm = () => {
  return (
    <form className="SearchForm">
      <input className="searchform-text" type="text" placeholder="소환사명을 입력하세요." />
      <button className="searchform-button" type="submit">검색</button>
    </form>
  )
}

export default SearchForm;