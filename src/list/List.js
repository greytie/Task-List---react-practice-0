import './List.css'

const List = ({ list, handleItemDeletion, toggleCrossOff }) => {
	return (
		<div className="list-container">
			{list && list.length > 0 ? (
				list.map(({ objectID, name, crossedOff }) => (
					<div key={objectID} className="item">
						<span className={'item-name' + (crossedOff ? ' crossed-off' : '')}>
							{name}
						</span>
						<span
							className="item-action item-cross"
							onClick={() => toggleCrossOff(objectID)}
						>
							{crossedOff ? 'undo' : 'cross off'}
						</span>
						<span
							className="item-action item-delete"
							onClick={() => handleItemDeletion(objectID)}
						>
							delete
						</span>
					</div>
				))
			) : (
				<div className="no-items">No Items</div>
			)}
		</div>
	)
}

export default List
