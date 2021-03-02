import React, { useEffect, useState } from 'react';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import './App.css';
import { Typography } from '@material-ui/core';

function App () {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => {
        setItems(data)
      })
  }, []);

  // callback function to add item to the items state:
  const addItem = (item) => {
    setItems([item, ...items]);
  };
  // callback function to remove item from the items state:
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };
  // callback function to toggle item at the items state:
  const toggleItem = (id) => {
    setItems(
      items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    );
  };
  
  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant='h1'>
        Planner
      </Typography>
      <AddItem addItem={addItem}/>
      <ItemList
        items={items}
        removeItem={removeItem}
        toggleItem={toggleItem}
      />
    </div>
  );
}

export default App;
