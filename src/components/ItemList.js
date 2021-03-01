import React from 'react';
import Item from './Item';

function ItemList ({ items, removeItem, toggleItem }) {
    return(
        <ul>
            {items.map(item => (
                <Item 
                    key={item.id}
                    item={item}
                    removeItem={removeItem}
                    toggleItem={toggleItem}
                />
            ))}     
        </ul>
    )
}

export default ItemList;