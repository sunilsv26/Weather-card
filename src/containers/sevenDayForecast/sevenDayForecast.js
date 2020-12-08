import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import classes from './sevenDayForecast.module.css';
import OneDayForecast from '../../components/searchResult/oneDayForecast/oneDayForecast';
import * as actions from '../../store/actions/search';

const WEEK_DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat','Sun']

class SevenDayForecast extends Component{

    forecastClickHandler=(el)=>{
        this.props.onDaySelection(el)
    }
    render(){
        let sevenDayReport = (<div className={classes.SevenDayForecast}>
            {this.props.dailyData ?this.props.dailyData.map(el=>{
            let date = new Date(el.dt*1000)
            return <OneDayForecast
            onClick={()=>this.forecastClickHandler(el)} 
            temp={(el.temp.day-273.15).toFixed(2)} 
            icon={el.weather[0].icon}
            weather={el.weather[0].main}
            day={WEEK_DAYS[date.getDay()]}
            />}):null}
        </div>)
    return(
        <Fragment>
    {sevenDayReport}
        </Fragment>
    )
   }
}

const mapStateToProps=state=>{
    console.log(state.search);
    return{
        dailyData:state.search.dailyData,
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        onDaySelection:(el)=>dispatch(actions.daySelection(el))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SevenDayForecast);