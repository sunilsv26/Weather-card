//The main parent component, all other components are laid on this 

import classes from './layout.module.css';
import React from 'react';
import WeatherCard from '../weatherCard/weatherCard'

const layout=(props)=>{
    return(
        <div className={classes.Layout}>
            <WeatherCard />
        </div>
    )
}

export default layout