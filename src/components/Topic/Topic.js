import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({ topic }) => {
    const { logo, name, total,id } = topic;
    return (
        <div className='topic'>
            <img src={logo} alt=""></img>
            <h4>Context:{name}</h4>
            <h5>Total Quiz:{total}</h5>
            <Link to={`quiz/${id}`}>
            <button  className='btn btn-primary'>Start Quiz</button>
</Link>
        </div>
    );
};

export default Topic;