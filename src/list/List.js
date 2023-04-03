import { IonIcon } from '@ionic/react'
import {
	closeOutline,
	arrowUndoOutline,
	checkmarkOutline,
} from 'ionicons/icons'
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
							<IonIcon
								icon={crossedOff ? arrowUndoOutline : checkmarkOutline}
								className={crossedOff ? 'undo-blue' : 'checkmark-green'}
							/>
						</span>
						<span
							className="item-action item-delete"
							onClick={() => handleItemDeletion(objectID)}
						>
							<IonIcon icon={closeOutline} className="delete-red"/>
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
