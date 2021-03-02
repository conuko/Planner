import React from 'react';
import Item from './Item';
import { List } from '@material-ui/core';

function ItemList ({ items, removeItem, toggleItem }) {
    return(
        <List>
            {items.map(item => (
                <Item 
                    key={item.id}
                    item={item}
                    removeItem={removeItem}
                    toggleItem={toggleItem}
                />
            ))}     
        </List>
    )
}

export default ItemList;