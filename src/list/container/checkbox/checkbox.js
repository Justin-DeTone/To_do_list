import "./checkbox.css";
import React from 'react';

function Checkbox(props) {
    let check = null;
    if (props.isChecked) {
        check = <i className="fas fa-check"></i>;
    }

    return(
        <div className="checkbox">
           {check} 
        </div>
    )
}

export default Checkbox;