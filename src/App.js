import './App.css'
import React from 'react'
import List from './List/List'
import TitleBox from './TitleBox/TitleBox'
import AddItemBox from './AddItemBox/AddItemBox'

const App = () => {
	const [itemList, setItemList] = React.useState([
		{
			name: 'Test Item',
			objectID: 0,
		},
	])

	const handleNewItem = (event) => {
		event.preventDefault()
		if (!newItemInput || newItemInput.trim().length === 0) {
			console.log("No text in input, can't add task.")
			return
		}

		const newList = [
			...itemList,
			{
				name: newItemInput,
				objectID: itemList.length,
			},
		].map((item, index) => {
			item.objectID = index
			return item
		})

		setItemList(newList)
		setNewItemInput('')
	}

	const handleItemDeletion = (deletedItemID) => {
		const newList = itemList.filter((item) => item.objectID !== deletedItemID)
		setItemList(newList)
	}

	const [newItemInput, setNewItemInput] = React.useState('')

	const handleNewItemInputChange = (event) => {
		setNewItemInput(event.target.value)
	}

	return (
		<main className="container">
			<div className="App">
				<TitleBox></TitleBox>
				<AddItemBox
					handleNewItem={handleNewItem}
					handleNewItemInputChange={handleNewItemInputChange}
					input={newItemInput}
				></AddItemBox>
				<List list={itemList} handleItemDeletion={handleItemDeletion}></List>
			</div>
		</main>
	)
}

export default App
