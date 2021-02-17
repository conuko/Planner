import React from 'react';

function Item ({ item, removeItem }) {

    const handleRemoveClick = () => {
        removeItem(item.id);
    }

    return(
        <div>
            <li>
                {item.text}
            </li>
            <button onClick={handleRemoveClick}>X</button>
        </div>
    );
}

export default Item;