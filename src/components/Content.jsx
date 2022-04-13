import React from 'react';

const Content = ({title, publishedAt, image}) => {
    return (
        <div className="content">
            <p>{title}<br /><small>{publishedAt}</small></p>
            <div className="imgCont">
                <img src={image} alt="" width="60px" height="60px" />
            </div>
        </div>
    )
};

export default Content;