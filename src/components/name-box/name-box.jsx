import React from 'react';

import './search-box.css';

export const NameBox = ({ placeholder, handleChange }) => (
    <input 
        className="search"
        type="text"
        placeholder={placeholder} 
        onChange={handleChange}
    />
);