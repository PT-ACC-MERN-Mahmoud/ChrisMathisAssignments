import React, {useState} from 'react';
import './App.css';

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const handleNewItemSubmit = (event) => {
    event.preventDefault();

    if (newItem.length === 0){
      return;
    }

    const todoItem = {
      text: newItem,
      complete: false
    };

    setItems([...items, todoItem]);
    setNewItem("");
  };

  const handleItemDelete = (del) => {
    const filteredItems = items.filter((item, i) => {
      return i !== del;
    });
    setItems(filteredItems);
  };

  const handleCheckMark = (ind) => {
    const updatedList = items.map((item, i) => {
      if (ind === i) {
        item.complete = !item.complete;
      }
      return item;
    });
    setItems(updatedList)
  };

  return (
    <div style={{textAlign: "center"}}>
      <form onSubmit={(event) =>{
        handleNewItemSubmit(event);
      }}>
        <input onChange={(event) => {
          setNewItem(event.target.value)
        }}
        type="text"
        value={newItem}
        />
        <div>
          <button>Add</button>
        </div>
      </form>

      <hr />

      {items.map((item, i) => {
        const itemClasses = [];
        
        if (item.complete){
          itemClasses.push("line-through");
        }
        return (
        <div key={i}>
          <input onChange={(event) => {
            handleCheckMark(i);
          }} checked={item.complete} type="checkbox" />
          <span className={itemClasses.join(" ")}>{item.text}</span>
          <button onClick={(event) => {
            handleItemDelete(i);
          }}
          style={{marginLeft: "10px"}}
          >Delete</button>
        </div>
        );
      })}
    </div>
  );
}

export default App;
