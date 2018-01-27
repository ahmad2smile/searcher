# Searcher

Searcher is a simple library search a string in an Array of strings or Array of Objects with specific properties as string.

##### Why?

* Can handle **large** Array
* Will run on a separate thread than Website (Magic of Web Workers)

#### Usage:

    import setUpWorker from "data-searcher";
    setUpWorker(dataToSearchFrom, "x");
