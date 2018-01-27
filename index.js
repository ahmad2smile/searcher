import workerFunction from "./worker"
import filterer from "./filterModule"

export default function searcher(inputData) {
	if (window && window.Worker) {
		const worker = new Worker(
			URL.createObjectURL(new Blob(["onmessage = " + workerFunction.toString()]))
		)
		worker.postMessage(inputData)

		return new Promise(
			resolve => {
				worker.addEventListener("message", ({ data }) => {
					resolve(data)
				})
			},
			error =>
				worker.addEventListener("error", e => {
					error(e)
				})
		)
	}

	try {
		return Promise.resolve(
			filterer(inputData.dataArray, inputData.searchParam, ...(inputData.searchProps || ""))
		)
	} catch (e) {
		return Promise.reject(e)
	}
}
