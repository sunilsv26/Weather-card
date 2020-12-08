//Component with state which responsible for input,sevenDay report

import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';

import SearchBar from '../../components/searchBar/searchBar';
import CityName from '../../components/searchResult/cityName/cityName';
import * as actions from '../../store/actions/search'

class Search extends Component{
    state={
        input:'',
        error:null,
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position)=>{
            let lat= position.coords.latitude;
            let lon=position.coords.longitude;
            this.props.onGetUserLocation(lat,lon);
            
        },
        (err)=>this.setState({error:err}))
        setTimeout(()=>{this.setState({input:this.props.city})},3000)
    }

    onChangeHandler=(event)=>{
        let newInput = event.target.value;
        this.setState({input:newInput})
    }
    render(){
        return(
            <Fragment>
                <SearchBar value={this.state.input} onChange={this.onChangeHandler}/>
                <CityName />
            </Fragment>
        )
    }
}
const mapStateToProps=state=>{
    return{
        city:state.search.city,
        lat:state.search.lat,
        lon:state.search.lon,
        temp:state.search.temp,
        weather:state.search.weather,
        icon:state.search.icon,
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onGetUserLocation:(lat,lon)=>dispatch(actions.getUserCity(lat,lon))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Search);