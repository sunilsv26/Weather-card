import * as actiontypes from '../actions/actionTypes';

let initialState= {
    temp:'',
    icon:'',
    pressure:'',
    humidity:'',
    sunrise:'',
    sunset:'',
}

const reducer =(state=initialState,action)=>{
    switch (action.type) {
        case actiontypes.ON_DAY_SELECTION:return{
            ...state,
            temp:action.temp,
            icon:action.icon,
            pressure:action.pressure,
            humidity:action.humidity,
            sunrise:action.sunrise,
            sunset:action.sunset,
            day:action.day,
        }
        default:
            return state;
    }
}

export default reducer;