import React, {Component} from "react";
import "./input.css";

export function Input(props) {
    return(
        <div className="input">
            <label for="new-to-do"></label>
            <textarea id="new-to-do" name="new-to-do"
                    rows="2" cols="33">
                        New to do item
                    </textarea>
        </div>
    )
}

export default Input;