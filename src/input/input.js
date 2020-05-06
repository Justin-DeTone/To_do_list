import React, {Component} from "react";
import "./input.css";

export function Input(props) {
    return(
        <div className="input">
            <form onSubmit={props.newToDo}>
                <label htmlFor="new-to-do"></label>
                <textarea id="new-to-do" name="new-to-do"
                        rows="2" cols="33" defaultValue="New to do item">
                </textarea>            
                <button>Submit</button> 
            </form>
        </div>
    )
}

export default Input;