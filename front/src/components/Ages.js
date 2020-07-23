import React from 'react';
import Golden from './Golden';
import Silver from './Silver';
import Bronze from './Bronze';
import Modern from './Modern';
import '../styles/Ages.css';

function Ages() {
    return (
        <div className='agesFlexContainer'>
            <Golden />
            <Silver />
            <Bronze />
            <Modern />
        </div>
    )
}

export default Ages;