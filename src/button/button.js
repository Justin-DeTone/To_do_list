import React, {Component} from 'react';
import './button.css';

export function Button(props) {
    let additionalClass = "";
    additionalClass = props.secondClass;

    return (
    <button className={`button ${additionalClass}`}>
        <i className="fas fa-plus"></i>
    </button>
    )
}

export default Button;