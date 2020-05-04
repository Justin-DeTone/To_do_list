import React, {Component} from "react";
import Checkbox from "./checkbox";
import "./container.css"

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {canEdit: true,};
    }

    
    render() {
        let button = null;
        if (this.state.canEdit)
            button = <button>Submit</button>

        return(
            <div className="container">
                <div className="container-box1">
                    <Checkbox isChecked={true} />
                </div>
                <div className="container-box2">
                    <div className="fillText">
                        {this.props.text}
                    </div>
                </div>
                <div className="container-box3">
                    <button>Submit</button>
                </div>

            </div>
        );
    }
}

export default Container;