import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

function AddItem ( { addItem }) {
    const [item, setItem] = useState({
        id: "",
        text: "",
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
            onSubmitItem({ ...item, id});
            addItem({ ...item, id});
            setItem({ ...item, text: ""});
        }
    };

    const onSubmitItem = (item) => {
        fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: item.id,
                text: item.text
            }),
        })
            .then(response => response.json())
            .catch(err => console.log('error'))
    }

    const textLeft = 300 - item.text.length;
    return(
        <form className="item-form" onSubmit={handleSubmit}>
            <textarea
                placeholder="What's hack'n?"
                label="item"
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
            <button
                type="submit"
                disabled={item.text === ''}
                >
                    SUBMIT
                </button>
        </form>
    );
}

export default AddItem;