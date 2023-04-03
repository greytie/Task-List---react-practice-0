/**
 * Got from: https://stackoverflow.com/questions/44656610/download-a-string-as-txt-file-in-react
 * @param {*} text
 */
export const downloadTextAsFile = (text, fileName) => {
	const element = document.createElement('a')
	const file = new Blob([text], {
		type: 'text/plain',
	})
	element.href = URL.createObjectURL(file)
	element.download = fileName
	document.body.appendChild(element) // Required for this to work in FireFox
	element.click()
}
