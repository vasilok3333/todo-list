import "./ListItems.css";
import React from 'react';
import ListItem from './ListItem'

class ListItems extends React.Component {
    render() {
        const items = this.props.items;
        const listItems = items.map(item => {
            return <ListItem
                text={item.text}
                key={item.id}
                id={item.id}
                done={item.done}
                deleteTask={this.props.deleteTask}
                filterItems={this.props.filterItems}
                //changeDone={this.props.changeDone}
            />
        })
        return (
            listItems.length > 0 ? <div className="listItems">{listItems}</div> : null
        )
    }
}


export default ListItems;