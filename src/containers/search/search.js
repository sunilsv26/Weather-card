//Component with state which responsible for input,sevenDay report

import React, { Component, Fragment } from 'react';

import SearchBar from '../../components/searchBar/searchBar'

class Search extends Component{
    state={
        input:'',
    }
    render(){
        return(
            <Fragment>
                <SearchBar />
            </Fragment>
        )
    }
}

export default Search;