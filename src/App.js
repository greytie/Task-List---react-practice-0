import './App.css';

const App = () => 
  (
    <div className="App">
      <AddItemBox></AddItemBox>
      <List></List>
    </div>
  );


const list = [
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
]
 
const List = () => 
  list.map(item => (
    <div key={item.objectID} className="item-list">
      <span>{item.description}</span>
    </div>
  ))

const AddItemBox = () => (
  <div className="add-item-box">
    <input id="add-item"></input>
    <button>add item</button>
  </div>
)

export default App;
