import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import { Button, TextField } from '@material-ui/core';

function AddItem ( { addItem }) {
    const [item, setItem] = useState({
        id: "",
        text: "",
        completed: false
    });

    const handleInputChange = (event) => {
        setItem({
            ...item,
            text: event.target.value
        })
    };

    const handleSubmit = (event) => {
        const id = uuid();
        event.preventDefault();
        if (item.text.trim()) {
            // function to add item to the server/database:
            onAddItem({ ...item, id});
            // callback function to add item to the state:
            addItem({ ...item, id});
            // sets the form text back to empty, after the item was added to the "items" state via the "addItem" callback function:
            setItem({ ...item, text: ""});
        }
    };

    const onAddItem = (item) => {
        fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: item.id,
                text: item.text,
                //completed: item.completed
            }),
        })
            .then(response => response.json())
            .catch(err => console.log('error'))
    };

    const textLeft = 300 - item.text.length;
    return(
        <form className="item-form" onSubmit={handleSubmit}>
            <TextField
                placeholder="What's hack'n?"
                name="item"
                type="text"
                value={item.text}
                onChange={handleInputChange}
                maxLength={300}
            />
            {textLeft <= 100 && (
                <div className='text-length'>
                    {textLeft}
                </div>
            )}
            <Button
                type="submit"
                disabled={item.text === ''}
            >
                SUBMIT
            </Button>
        </form>
    );
}

export default AddItem;