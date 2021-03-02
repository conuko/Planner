import React, { useEffect } from 'react';
import { Checkbox, IconButton, ListItem, Typography } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Item ({ item, removeItem, toggleItem }) {

    /*
    use "useEffect" to update the server/database if the "completed" status of an item
    was updated from false to true or from true to false:
    */
    useEffect(() => {
        fetch('http://localhost:3000/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: item.id,
                completed: item.completed
            }),
        })
            .then(response => response.json())
    }, [item.id, item.completed])

    const handleToggleClick = () => {
        toggleItem(item.id);   
    };

    const handleRemoveClick = () => {
        //remove item from the server:
        onRemoveItem(item.id);
        // callback function to remove item from the state:
        removeItem(item.id);
    };

    // removes a removed item from the server/database:
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
    };



    return(
        <ListItem style={{display: 'flex'}}>
            <Checkbox
                checked={item.completed}
                onClick={handleToggleClick}
            />
            <Typography
                variant='body1'
                style={{
                    textDecoration: item.completed ? 'line-through' : null
                }}
                >
                {item.text}
            </Typography>
            <IconButton onClick={handleRemoveClick}>
                <DeleteForeverIcon />
            </IconButton>
        </ListItem>
    );
}

export default Item;