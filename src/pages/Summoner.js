import React from 'react';
import queryString from 'query-string';

const Summoner = ({location}) => {
  const query = queryString.parse(location.search);
  console.log(query);

  return (
    <div>
      {query.userName}의 전적 페이지
    </div>
  )
}

export default Summoner;