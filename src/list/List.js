import './List.css';

const List = ({list, handleItemDeletion}) => {
    return (
      <div className="list-container">
        {(list && list.length > 0)
          ?
           list.map(({objectID, name}) => (
            <div key={objectID} className="item">
              <span className="item-name">{name}</span>
              <span className="item-action item-cross">cross off</span>
              <span className="item-action item-delete" onClick={() => handleItemDeletion(objectID)}>delete</span>
            </div>
          ))
          :
          <div className="no-items">No Items</div>
        }
      </div>
    )
  }

  export default List;