import './App.css';

function App() {
  return (
    <div className="App">
      <List></List>
    </div>
  );
}

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
    <div class="item-list">
      <span>{item.description}</span>
    </div>
  ))


export default App;
