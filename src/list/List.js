const List = props => {
    return (
      <div className="list-container">
        {(props.list && props.list.length > 0)
          ?
           props.list.map(item => (
            <div key={item.objectID} className="item">
              <span className="item-name">{item.name}</span>
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

  export default List;