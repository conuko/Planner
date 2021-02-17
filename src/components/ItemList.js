import React from 'react';
import Item from './Item';

function ItemList ({ items, removeItem }) {
    return(
        <ul>
            {items.map(item => (
                <Item 
                    key={item.id}
                    item={item}
                    removeItem={removeItem}
                />
            ))}     
        </ul>
    )
}

export default ItemList;