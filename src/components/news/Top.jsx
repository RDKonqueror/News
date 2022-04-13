import React, {useState, useEffect} from 'react';
import ContentList from '../ContentList';

const Top = () => {
    const [content, setContent] = useState([]);

    const getData = () => {
      fetch('https://gnews.io/api/v4/search?q=example&token=86ba322e54003d54ce77bd41e82e527f').then(function (response) {
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