//Input component where user can search for cities

import React from 'react';
import classes from './searchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faSearch} from '@fortawesome/free-solid-svg-icons'

const searchbar=(props)=>{
    return(
        <div className={classes.SearchBar}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className={classes.LocationTag} />
            <input className={classes.SearchField}
            placeholder='City Name' value={props.value}
            onChange={(event)=>props.onChange(event)} />
            <FontAwesomeIcon icon={faSearch} className={classes.SearchIcon} />
        </div>
    )
}

export default searchbar;