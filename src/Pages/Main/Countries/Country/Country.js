import React from 'react';
import './Country.css';

const Country = ({ country }) => {
    const { flag, name, capital, region } = country;
    console.log(country);
    return (
        <div className="card">
            <img src={flag} alt="John" style={{ width: "100%" }} />
            <h1>{name}</h1>
            <p className="title">{capital}</p>
            <p>{region}</p>
            <p><button>Detail</button></p>
        </div>
    );
};

export default Country;