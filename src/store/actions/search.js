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