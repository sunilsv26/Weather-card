//Component showing pressure and humidity on selected day

import React from 'react';

import classes from './pressureAndHumidity.module.css';

const pressureAndHumidity=(props)=>{
    return(
        <div className={classes.PressureAndHumidity}>
            <div className={classes.Pressure}>
                <div><strong>Presssure</strong></div>
                <div>{props.pressure}hPa</div>
            </div>
            <div className={classes.Pressure}>
            <div><strong>Humidity</strong></div>
            <div>{props.humidity}%</div>
            </div>
        </div>
    )
}

export default pressureAndHumidity;