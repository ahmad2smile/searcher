export default function workerFunction(e) {
	function searcher(dataArray, searchParam, ...searchProps) {
		searchParam = searchParam.toUpperCase()

		if (!searchProps.length) {
			return dataArray.length
				? dataArray.filter(data => data.toUpperCase().includes(searchParam))
				: dataArray
		}
		return dataArray.length && searchParam.length
			? dataArray.filter(data =>
					searchProps.some(
						searchProp =>
							data[searchProp] && data[searchProp].toUpperCase().includes(searchParam)
					)
				)
			: dataArray
	}
	const result = searcher(e.data.dataArray, e.data.searchParam, ...(e.data.searchProps || ""))
	postMessage(result)
}
