import React, { useEffect, useState } from 'react';
import ContentList from '../ContentList';

const Headlines = () => {
    const [content, setContent] = useState([]);

    const getData = () => {
        fetch('https://gnews.io/api/v4/top-headlines?token={API TOKEN}').then(function (response) {
            return response.json();
        })
            .then(function (data) {
                setContent(data.articles);
            });
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div className="main">
            <h3>Headlines</h3>
            <ContentList data={content} />
        </div>
    )
};

export default Headlines;
