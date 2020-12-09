import * as actiontypes from './actionTypes';

import axios from 'axios'

export const getUserCityStart=()=>{
    return{
        type:actiontypes.GET_USER_CITY_START,
    }
}

export const getUserCitySucess=(userData)=>{
    console.log(userData);
    return{
        type:actiontypes.GET_USER_CITY_SUCCESS,
        city:userData.city,
        temp:userData.temp,
        weather:userData.weather,
        icon:userData.icon,
        lat:userData.lat,
        lon:userData.lon,
    }
}

export const getUserCityFail=(error)=>{
    return{
        type:actiontypes.GET_USER_CITY_FAIL,
        error:error
    }
}

export const getUserCity=(lat,lon)=>{
    return dispatch=>{
        getUserCityStart();
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8814bcaf1acaec252ca58dccf3239760`)
        .then(res=>{
            let city =res.data.name ;
            let temp=res.data.main.temp;
            let weather=res.data.weather[0].main;
            let icon = res.data.weather[0].icon;
            let lat = res.data.coord.lat;
            let lon= res.data.coord.lon;
            let userData={'city':city,'temp':temp,'weather':weather,'icon':icon,'lat':lat,'lon':lon};
            dispatch(getUserCitySucess(userData))
        })
        .catch(err=>dispatch(getUserCityFail(err)))
    }
}


export const searchCityCoordsStart =()=>{
    return{
        type:actiontypes.SEARCH_CITY_COORD_START,
   }
}

export const searchCityCoordsSuccess=(lat,lon,city,countryCode)=>{
    return{
        type:actiontypes.SEARCH_CITY_COORD_SUCCESS,
        lat:lat,
        lon:lon,
        city:city,
        countryCode:countryCode,
    }
}

export const searchCityCoordsFail=(error)=>{
    return{
        type:actiontypes.SEARCH_CITY_COORD_FAIL,
        coordsError:error
    }
}

export const searchCityCoords=(cityName)=>{
    return dispatch=>{
        searchCityCoordsStart();
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8814bcaf1acaec252ca58dccf3239760&units=metric`)
        .then(res=>{
            let lat = res.data.coord.lat;
            let lon= res.data.coord.lon;
            let city=res.data.name;
            let code = res.data.sys.country;
            dispatch(searchCityCoordsSuccess(lat,lon,city,code))
        }
            )
        .catch(err=>dispatch(searchCityCoordsFail(err)))

    }
}

export const searchCityStart =()=>{
    return{
        type:actiontypes.SEARCH_CITY_START,
        city:'',
        icon:'',
        weather:'',
        temp:'',
    }
}

export const searchCitySuccess=(dailyData,hourlyData)=>{
    return{
        type:actiontypes.SEARCH_CITY_SUCCESS,
        icon:dailyData[0].weather[0].icon,
        weather:dailyData[0].weather[0].main,
        temp:dailyData[0].temp.day,
        dailyData:dailyData,
        hourlyData:hourlyData,
    }
}

export const searchCityFail=(error)=>{
    return{
        type:actiontypes.SEARCH_CITY_FAIL,
        cityError:error
    }
}

export const searchCity=(lat,lon)=>{
    return dispatch=>{
        searchCityStart();
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=8814bcaf1acaec252ca58dccf3239760&units=metrics`)
        .then(res=>{
            let daily = [...res.data.daily];
            let hourly = [...res.data.hourly]
            let dailyData = daily.map(key=>{return{...key,id:key.dt}});
            let hourlyData = hourly.map(key=>{return {...key,id:key.dt}})
            dispatch(searchCitySuccess(dailyData,hourlyData))
        }
            )
        .catch(err=>dispatch(searchCityFail(err)))

    }
}

const WEEK_DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat','Sun']

export const daySelection=(el)=>{
    let date = new Date(el.dt*1000);
    return{
        type:actiontypes.ON_DAY_SELECTION,
        temp:el.temp.day,
        icon:el.weather[0].icon,
        pressure:el.pressure,
        humidity:el.humidity,
        sunrise:el.sunrise,
        sunset:el.sunset,
        day:WEEK_DAYS[date.getDay()],
    }
}