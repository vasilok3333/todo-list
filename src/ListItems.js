import "./ListItems.css";
import React from 'react';

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        console.log(item.key)
        return (
            <div className="listItem" key="item.key">
                {item.text}
            </div>
        )
    }
        )
    return (
        <div>{listItems}</div>
    )
}

export default ListItems;