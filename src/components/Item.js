import React from 'react';

function Item ({ item, removeItem, toggleItem }) {

    const handleToggleClick = () => {
        toggleItem(item.id)
    }

    const handleRemoveClick = () => {
        onRemoveItem(item.id);
        removeItem(item.id);
    }

    const onRemoveItem = (item) => {
        fetch('http://localhost:3000/', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: item
            }),
        })
            .then(response => response.json())
    }

    return(
        <div>
            <li checked={item.completed} onClick={handleToggleClick} style={{textDecoration: item.completed ? 'line-through' : null}}>
                {item.text}
            </li>
            <button onClick={handleRemoveClick}>X</button>
        </div>
    );
}

export default Item;