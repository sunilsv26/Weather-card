//Card Component which holds input,result,weatherdata

import React from "react";

import classes from "./weatherCard.module.css";
import Search from '../../containers/search/search'

const weatherCard = (props) => {
  return <div className={classes.WeatherCard}>
     <Search />
  </div>;
};

export default weatherCard