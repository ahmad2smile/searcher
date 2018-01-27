import workerFunction from "./worker"
import filterer from "./filterModule"

export default function searcher(data) {
	if (window && window.Worker) {
		const worker = new Worker(
			URL.createObjectURL(new Blob(["onmessage = " + workerFunction.toString()]))
		)
		worker.postMessage(data)

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
		return Promise.resolve(filterer(data.data, data.param))
	} catch (e) {
		return Promise.reject(e)
	}
}

//usage
//setUpWorker({ data: dataToSearchFrom, param: "x" });
