import * as actionTypes from '../actions/actionTypes';

let initialState = {
    city:'',
    lat:'',
    lon:'',
    icon:'',
    temp:'',
    weather:'',
    dailyData:[],
    hourlyData:[],
}

const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.GET_USER_CITY_START:return{
            ...state,
            city:'',
            lat:'',
            lon:'',
            icon:'',
            temp:'',
            weather:'',
        }

        case actionTypes.GET_USER_CITY_SUCCESS:
        console.log(action.city);    
        return{
            ...state,
            city:action.city,
            lat:action.lat,
            lon:action.lon,
            icon:action.icon,
            temp:action.temp,
            weather:action.weather,
        }

        case actionTypes.GET_USER_CITY_FAIL:return{
            ...state,
            error:action.error
        }
        case actionTypes.SEARCH_CITY_COORD_START:return{
            ...state,
            city:'',
            temp:'',
            weather:'',
            icon:'',
        }
        case actionTypes.SEARCH_CITY_COORD_SUCCESS:  
        return{
            ...state,
            city:action.city,
            lat:action.lat,
            lon:action.lon,
            countryCode:action.countryCode,
            loading:false,
        }
        case actionTypes.SEARCH_CITY_COORD_FAIL:return{
            ...state,
            coordsError:action.error,
        }
        case actionTypes.SEARCH_CITY_START:return{
            ...state,
        }
        case actionTypes.SEARCH_CITY_SUCCESS:return{
            ...state,
            icon:action.icon,
            temp:action.temp,
            weather:action.weather,
            dailyData:action.dailyData,
            hourlyData:action.hourlyData
        }
        case actionTypes.SEARCH_CITY_FAIL:return{
            ...state,
        }
        
        default:
            return state;
    }
}

export default reducer