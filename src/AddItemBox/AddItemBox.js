import './AddItemBox.css'

const AddItemBox = ({ handleNewItem, handleNewItemInputChange, input }) => (
	<div className="add-item-box">
		<form onSubmit={handleNewItem}>
			<div className="add-item-grid">
				<input
					id="add-item"
					value={input}
					onChange={handleNewItemInputChange}
				/>
				<button type="submit">add item</button>
			</div>
		</form>
	</div>
)

export default AddItemBox
