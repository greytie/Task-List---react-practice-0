import './App.css';
import React from 'react';

const App = () => {
  const initialList = [
    {
      description: "Clean kitchen",
      objectID: 0
    },
    {
      description: "Organize email inbox",
      objectID: 1
    },
    {
      description: "Do taxes",
      objectID: 2
    },
  ];

  const [itemList, setItemList] = React.useState(initialList);

  const handleNewItem = event => {
    console.log(newItemInput)
    setItemList([...itemList, {
      description: newItemInput,
      objectID: itemList.length
    }]);
  }

  const [newItemInput, setNewItemInput] = React.useState('');

  const handleNewItemInputChange = event => {
    setNewItemInput(event.target.value)
  }

  return (
    <div className="App">
      <AddItemBox handleNewItem={handleNewItem} handleNewItemInputChange={handleNewItemInputChange}></AddItemBox>
      <List list={itemList}></List>
    </div>
  );
}
  
 
const List = props => 
  props.list.map(item => (
    <div key={item.objectID} className="item-list">
      <span>{item.description}</span>
    </div>
  ))

const AddItemBox = props => (
  <div className="add-item-box">
    <input id="add-item" onChange={props.handleNewItemInputChange} />
    <button onClick={props.handleNewItem}>add item</button>
  </div>
)

export default App;
