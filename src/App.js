import './App.css'
import React from 'react'
import List from './List/List'
import TitleBox from './TitleBox/TitleBox'
import AddItemBox from './AddItemBox/AddItemBox'
import { readItemStorage, createItem, deleteItem } from './lib/storage'

const App = () => {
	const itemStorage = readItemStorage()
	const [itemList, setItemList] = React.useState(itemStorage.items)

	const handleNewItem = (event) => {
		event.preventDefault()
		if (!newItemInput || newItemInput.trim().length === 0) {
			console.log("No text in input, can't add task.")
			return
		}

		const { items } = createItem({
			name: newItemInput,
			crossedOff: false,
		})

		setItemList(items)
		setNewItemInput('')
	}

	const handleItemDeletion = (deleteItemID) => {
		const { items } = deleteItem(deleteItemID)
		setItemList(items)
	}

	const toggleCrossOff = (crossedItemID) => {
		const newList = itemList.map((item) => {
			if (item.objectID === crossedItemID) {
				item.crossedOff = !item.crossedOff
			}
			return item
		})
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
				<List
					list={itemList}
					handleItemDeletion={handleItemDeletion}
					toggleCrossOff={toggleCrossOff}
				></List>
			</div>
		</main>
	)
}

export default App
