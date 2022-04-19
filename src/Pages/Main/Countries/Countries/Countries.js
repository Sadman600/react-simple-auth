import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);
    return (
        <div>
            <div className='countries-container'>
                <Helmet>
                    <title>Countries -Simple auth</title>
                </Helmet>
                {
                    countries.map(country => <Country key={country.name} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;