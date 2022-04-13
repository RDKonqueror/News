import React, { useEffect, useState } from 'react';
import ContentList from '../ContentList';

const Sports = () => {
  const [content, setContent] = useState([]);

  const getData = () => {
    fetch('https://gnews.io/api/v4/search?q=sports&token={API TOKEN}').then(function (response) {
      return response.json();
    })
      .then(function (data) {
        setContent(data.articles)
      });
  };

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="main">
      <h3>Sports</h3>
      <ContentList data={content} />
    </div>
  )
};

export default Sports
