import React from "react";
import {useState} from 'react';

function light() {
    const [light, isOn] = useState(0);
    return(
        <div className='light-wrapper'>
        <div className={'light ${color}-light ${isOn && "on"}'}></div>
        </div>
        
    )
}
export default light;