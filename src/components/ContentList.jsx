import React from 'react';
import Content from './Content';

const ContentList = ({data}) => {
    return (
        data && data.length>0 && data.map(({title, publishedAt, image}) => {
            return (
                <Content 
                    title={title}
                    publishedAt={publishedAt}
                    image={image}
                />
            )
        })
    )
};

export default ContentList;