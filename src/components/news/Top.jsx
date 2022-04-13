import React, {useState, useEffect} from 'react';
import ContentList from '../ContentList';

const Top = () => {
    const [content, setContent] = useState([]);

    const getData = () => {
      fetch('https://gnews.io/api/v4/search?q=example&token={API TOKEN}').then(function (response) {
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
        <h3>Top Stories</h3>
        <ContentList data={content} />
      </div>
    )
  };

export default Top;
