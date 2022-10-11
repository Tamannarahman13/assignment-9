import React from 'react';
import './Topic.css'

const Topic = ({ topic }) => {
    const { logo, name, total } = topic;
    return (
        <div className='topic'>
            <img src={logo}></img>
            <h4>Context:{name}</h4>
            <h5>Total Quiz:{total}</h5>

        </div>
    );
};

export default Topic;