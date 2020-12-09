// Component which shows detailed weather report

import React, { Fragment } from "react";
import { connect } from "react-redux";
import classes from "./detailedForecast.module.css";
import PressureAndHumidity from "./pressureAndHumidity/pressureAndHumidity";
import TempAndDay from "./tempAndDay/tempAndDay";

const detailedForecast = (props) => {
  return (
    <div className={classes.DetailedForecast}>
      {props.temp ? (
        <Fragment>
          <TempAndDay temp={props.temp} icon={props.icon} />
          <PressureAndHumidity
            pressure={props.pressure}
            humidity={props.humidity}
          />
        </Fragment>
      ) : (
        <div>Select a Day</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    temp: state.sevenDayReport.temp,
    icon: state.sevenDayReport.icon,
    pressure: state.sevenDayReport.pressure,
    humidity: state.sevenDayReport.humidity,
    sunrise: state.sevenDayReport.sunrise,
    sunset: state.sevenDayReport.sunset,
    day: state.sevenDayReport.day,
    city: state.search.city,
  };
};

export default connect(mapStateToProps)(detailedForecast);
