import React from 'react';
import './Country.css';

const Country = ({ country }) => {
    const { flag, name } = country;
    // console.log(country);
    return (
        <div className="card">
            <img src={flag} alt="John" style={{ width: "100%" }} />
            <h1>{name}</h1>
            <p className="title">CEO & Founder, Example</p>
            <p>Harvard University</p>
            <p><button>Contact</button></p>
        </div>
    );
};

export default Country;