import React, { useEffect, useState } from 'react';
import ContentList from '../ContentList';

const Science = () => {
  const [content, setContent] = useState([]);

  const getData = () => {
    fetch('https://gnews.io/api/v4/search?q=science&token=86ba322e54003d54ce77bd41e82e527f').then(function (response) {
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
      <h3>Science</h3>
      <ContentList data={content} />
    </div>
  )
};

export default Science;