import workerFunction from "./worker"
import filterer from "./filterModule"

export default function searcher(dataArray, searchParam, ...searchProps) {
	const inputData = { dataArray, searchParam, searchProps }

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
		return Promise.resolve(filterer(dataArray, searchParam, ...(searchProps || "")))
	} catch (e) {
		return Promise.reject(e)
	}
}
