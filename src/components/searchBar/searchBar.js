import React from 'react';
import classes from './searchBar.module.css';

const searchbar=(props)=>{
    return(
        <div>
            <input className={classes.SearchField}
            placeholder='City Name' value={props.value}
            onChange={(event)=>props.onChange(event)} />
        </div>
    )
}

export default searchbar;