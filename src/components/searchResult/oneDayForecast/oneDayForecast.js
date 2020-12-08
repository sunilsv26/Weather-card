//Component dispalying one day temp,weather,day

import React from 'react';

import classes from './oneDayForecast.module.css';

const oneDayForecast=(props)=>{
    return(
        <div className={classes.OneDayForecast} onClick={props.onClick}>
            <div className={classes.Day}>{props.day}</div>
            <div className={classes.Temp}>{props.temp}&#8451;</div>
            <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt='icon' />
            <label className={classes.DayType}>{props.weather}</label>
        </div>
    )
}

export default oneDayForecast