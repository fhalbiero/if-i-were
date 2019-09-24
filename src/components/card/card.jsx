import React from 'react';

import './card.css';

export const Card = ({name, type}) => (
    <div className="card-container">
        <img src={`https://robohash.org/${name}?set=set${type}&size=320x320`} alt="avatar"
        />
    </div>
)
