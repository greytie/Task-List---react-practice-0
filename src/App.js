import './App.css';
import '@picocss/pico';
import React from 'react';

const App = () => {
  const [itemList, setItemList] = React.useState([
    {
      description: "Test Item",
      objectID: 0
    }
  ]);

  const handleNewItem = event => {
    event.preventDefault();
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
  <div className="title-box">
    <h1>Task List</h1>
  </div>
)

const List = props => {
  return (
    <div className="list-container">
      {(props.list && props.list.length > 0)
        ?
         props.list.map(item => (
          <div key={item.objectID} className="item">
            <span className="item-description">{item.description}</span>
            <span className="item-action item-cross">cross off</span>
            <span className="item-action item-delete">delete</span>
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
    <form onSubmit={props.handleNewItem}>
      <div className="add-item-grid">
        <input id="add-item" value={props.input} onChange={props.handleNewItemInputChange} />
        <button type="submit">add item</button>
      </div>
    </form>
  </div>
)

export default App;
