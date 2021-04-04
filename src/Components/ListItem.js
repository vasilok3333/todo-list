import React from "react";


class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            edit: false,
            id: this.props.id,
            done: this.props.done,
        }
        this.editListItem = this.editListItem.bind(this);
        this.editText = this.editText.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
        this.doneItem = this.doneItem.bind(this);
    }

    editListItem(evt) {
        
        this.setState({
            text: evt.target.value,
        })
    }

    editText() {
        this.setState({
            edit: !this.state.edit,
        })
    }

    deleteItem() {
        this.props.deleteTask(this.state.id);
    }

    onKeyPressHandler(evt) {
        if (evt.key === "Enter") {
            this.editText();
        } 
    }

    doneItem() {
        this.setState({
            done: !this.state.done
        })
  //  this.props.changeDone(this.state.id)  
    }
    
    render() {
        
        return (
            <div className={"listItem " + (!this.state.done ? null : "doneItem")} >
                { !this.state.edit ?
                    <div className="taskText">
                        {this.state.text}
                    </div> :
                    <input
                        type="text"
                        className="inputItem"
                        value={this.state.text}
                        onBlur={this.editText}
                        onKeyPress={this.onKeyPressHandler}
                        onChange={this.editListItem} />
                }
                <Buttons editText={this.editText} deleteIitem={this.deleteItem} doneItem={this.doneItem} />
            </div>
        )
    }
}



function Buttons(props) {
    return (
        <div className="buttons">
            <p onClick={props.editText}>🖊️</p>
            <p onClick={props.doneItem}>✔️</p>
            <p onClick={props.deleteIitem}>❌</p>
        </div>
    )
}

export default ListItem;