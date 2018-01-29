import dataSearcher from "../index"

//just to create random data to search through
function randomWordsArray() {
	const alphabets = "qwertyuioplkjhgfdsazxcvbnm"

	return Array.from({ length: 20 }, () => {
		const startIndex = Math.floor(Math.random() * 20)
		return {
			firstname: alphabets.substr(startIndex, 3),
			lastname: alphabets.substr(startIndex)
		}
	})
}

const dataToSearchFrom = randomWordsArray()

console.log("Orignal Data", dataToSearchFrom)
//just to create random data to search through

//using worker: pass array as data and query to search as param
const result = dataSearcher(dataToSearchFrom, "yui", "firstname", "lastname")

result.then(console.log)
