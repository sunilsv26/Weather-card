//Component responsible for rendering cityName,temp,weather from API response
import React from 'react';

import classes from './cityName.module.css';

const cityName=(props)=>{
    return(
        <div className={classes.SearchResult} onClick={(event)=>props.onClick(event)}>
            <div>
                <strong>{props.cityName}</strong>,{props.country}
            </div>
            <div className={classes.Summary}>
                <div>
                    <div>
                        <strong>{props.temp}&#8451;</strong>
                    </div>
                    <div>{props.dayType}</div>
                </div>
                <div>
                    {props.icon}
                </div>
            </div>

        </div>
    )
}

export default cityName