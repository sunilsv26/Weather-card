// Component which shows detailed weather report 

import React from "react";
import { connect } from "react-redux";
import classes from "./detailedForecst.module.css";

const detailedForecast=(props)=>{
    return(
        <div className={classes.DetailedForecast}></div>
    )
}

const mapStateToProps=state=>{
    return{
    temp: state.sevenDayReport.temp,
    icon: state.sevenDayReport.icon,
    pressure:state.sevenDayReport.pressure,
    humidity:state.sevenDayReport.humidity,
    sunrise:state.sevenDayReport.sunrise,
    sunset:state.sevenDayReport.sunset,
    }
}

export default connect(mapStateToProps) (detailedForecast);