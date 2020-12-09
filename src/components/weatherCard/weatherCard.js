//Card Component which holds input,result,weatherdata

import React from "react";

import classes from "./weatherCard.module.css";
import Search from "../../containers/search/search";
import SevenDayForecast from "../../containers/sevenDayForecast/sevenDayForecast";
import DetailedForecast from "../detailedForecast/detailedForecast";

const weatherCard = (props) => {
  return (
    <div className={classes.WeatherCard}>
      <Search />
      <SevenDayForecast />
      <DetailedForecast />
    </div>
  );
};

export default weatherCard;
