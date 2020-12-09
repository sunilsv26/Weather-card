import React from 'react';
import classes from './tempAndDay.module.css';

const tempAndDay=(props)=>{
    return(
        <div className={classes.TempAndDay}>
            <div className={classes.Temp}>{(props.temp-273.15).toFixed(2)}&#8451;</div>
            <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt='temp' />
            <div>{props.day},{props.date},{props.month}</div>
            <div>{props.city}</div>
        </div>
    )
}

export default tempAndDay;