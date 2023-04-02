const readItemStorage = () => {
	const itemStorageJson = localStorage.getItem('itemStorage')

	if (itemStorageJson) {
		// TODO: Should use in try/catch
		// TODO: Should validate
		const itemStorage = JSON.parse(itemStorageJson)
		return itemStorage
	}

	return {
		items: [],
		idIncrement: 0,
	}
}

const createItem = (item) => {
	const itemStorage = readItemStorage()
	item.objectID = ++itemStorage.idIncrement
	itemStorage.items.push(item)
	localStorage.setItem('itemStorage', JSON.stringify(itemStorage))
}

const updateItem = (item) => {
	const itemStorage = readItemStorage()
	const index = itemStorage.items.findIndex((x) => x.objectID === item.objectID)

	if (index >= 0) {
		itemStorage.items[index] = item
		localStorage.setItem('itemStorage', JSON.stringify(itemStorage))
	}
}

const deleteItem = (objectID) => {
	const itemStorage = readItemStorage()
	itemStorage.items = itemStorage.items.filter(
		(item) => item.objectID !== objectID
	)
	localStorage.setItem('itemStorage', JSON.stringify(itemStorage))
}

export { readItemStorage, createItem, updateItem, deleteItem }
