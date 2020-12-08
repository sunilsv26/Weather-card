import * as actionTypes from '../actions/actionTypes';

let initialState = {
    city:'',
    lat:'',
    lon:'',
    icon:'',
    temp:'',
    weather:'',
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

        case actionTypes.GET_USER_CITY_SUCCESS:return{
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
            
        
    
        default:
            return state;
    }
}

export default reducer