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

    addItemToList(textContent) {
        let toDoItemsList = [...this.state.listItems];
        toDoItemsList.push({text: textContent, isChecked: false,});
        return toDoItemsList;
    }

    addToDo = (e) => {
        e.preventDefault();
        let newText = e.target.querySelector("textarea").value;
        console.log(newText);
        this.setState({listItems: this.addItemToList(newText)});
    }

    render() {
        const listTasks = this.state.listItems.map((item, idx) =>
            <Container isChecked={item.isChecked} key={idx} 
            text={item.text} />
        );
        return(
            <div className="to-do-list">
                {listTasks}
            <Input newToDo={this.addToDo} />
            </div>
        )
    }
}

export default List;