# Data Searcher

Searcher is a simple library search a string in an Array of strings or Array of Objects with specific properties as string.

##### Install

`npm install data-searcher`

##### Why?

* Can handle **large** Array
* Will run on a separate thread than Website (Magic of Web Workers)

#### Usage:

For simple string Array search

    import dataSearcher from "data-searcher";

    dataSearcher(dataToSearchFrom, "x");

For Array of Objects search, Like if you wanna search record with character "x" for properties "name" or "job"

    import dataSearcher from "data-searcher";

    const dataToSearchFrom = [{ name: "Xavier", job: "x-man" }]

    dataSearcher(dataToSearchFrom, "x", "name", "job");
