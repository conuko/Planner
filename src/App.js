import React, { useEffect, useState } from 'react';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';

// const LOCAL_STORAGE_KEY = 'react-form-exercise';

function App () {
  const [items, setItems] = useState([]);

  // use the useEffect function to store the get and set/save the Items inside the browsers store (so the page can be reloaded and the items are still be there):
  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => {
        setItems(data)
      })
  }, []);

  const addItem = (item) => {
    setItems([item, ...items]);
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <AddItem addItem={addItem}/>
        <ItemList
          items={items}
          removeItem={removeItem}
        />
      </header>
    </div>
  );
}

export default App;
