import './App.css';
import '@picocss/pico';
import React from 'react';

const App = () => {
  const [itemList, setItemList] = React.useState([]);

  const handleNewItem = () => {
    if (!newItemInput || newItemInput.trim().length === 0) {
      console.log("No text in input, can't add task.")
      return;
    }     

    console.log(newItemInput)
    setItemList([...itemList, {
      description: newItemInput,
      objectID: itemList.length
    }]);
    setNewItemInput('')
  }

  const [newItemInput, setNewItemInput] = React.useState('');

  const handleNewItemInputChange = event => {
    setNewItemInput(event.target.value)
  }

  return (
    <main className="container">
      <div className="App">
        <TitleBox></TitleBox>
        <AddItemBox handleNewItem={handleNewItem} handleNewItemInputChange={handleNewItemInputChange} input={newItemInput}></AddItemBox>
        <List list={itemList}></List>
      </div>
    </main>
    
  );
}
 
const TitleBox = () => (
  <div>
    <h1>Task List</h1>
  </div>
)

const List = props => {
  return (
    <div className="list-container">
      {(props.list && props.list.length > 0)
        ?
         props.list.map(item => (
          <div key={item.objectID} className="item-list">
            <span>{item.description}</span>
          </div>
        ))
        :
        <div className="no-items">No Items</div>
      }
    </div>
  )
}
 

const AddItemBox = props => (
  <div className="add-item-box">
    <input id="add-item" value={props.input} onChange={props.handleNewItemInputChange} />
    <button onClick={props.handleNewItem}>add item</button>
  </div>
)

export default App;
