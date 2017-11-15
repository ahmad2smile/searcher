self.addEventListener("message", (e)=>{
    function searcher(dataArray, searchParam, ...searchProps){
        if (!searchProps.length){
            return (dataArray.length) ?
                dataArray.filter((data)=>
                    data.toUpperCase().includes(searchParam.toUpperCase())
        		)
        		: dataArray;
        }
    	return (dataArray.length && searchParam.length) ?
            dataArray.filter((data)=>
    			searchProps.some((searchProp)=>
    				data[searchProp].toUpperCase().includes(searchParam.toUpperCase())
    			)
    		)
    		: dataArray;
    }
    
    const result = searcher(e.data.data, e.data.param);
    self.postMessage(result);
});