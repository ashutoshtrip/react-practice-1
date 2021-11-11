import React from 'react'
import Char from './Char';
import "./Validation.css"
import Radium from 'radium'
const Validation = (props)=>{
    let classes = [];

    if(props.len < 5)
    {
        classes.push('red');
    }
    if(props.len >=5)
    {
        classes.push('green');
    }
    return (
        <div>
         {  
             props.len < 5 ? <p className = {classes.join(' ')}>  TEXT TOO SHORT </p> : <p className={classes.join(' ')}>  TEXT TOO LONG</p>
         }
        
       </div>
    )
        }

export default Radium(Validation)
