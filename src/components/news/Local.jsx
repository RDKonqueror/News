import React, {useState, useEffect} from 'react';
import ContentList from '../ContentList';

const Local = () => {
    const [content, setContent] = useState([]);

    const getData = () => {
      fetch('https://gnews.io/api/v4/search?q=in&token={API TOKEN}').then(function (response) {
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
        <h3>Your Local</h3>
        <ContentList data={content} />
      </div>
    )
  };

export default Local;
