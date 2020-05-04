import React, {Component} from "react";
import Container from "./container";
import Input from "input";
import "./list.css";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {listItems: [
            {text: "Do something productive", isChecked: false},
            ]
        };
    }

    render() {
        const listTasks = this.state.listItems.map((item) =>
            <Container isChecked={item.isChecked} text={item.text} />
        );
        return(
            <div className="to-do-list">
                {listTasks}
            <Input />
            </div>
        )
    }
}

export default List;