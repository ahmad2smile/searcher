export default function setUpWorker(workerFileName, data) {
    const worker = new Worker(workerFileName);
    worker.postMessage(data);
    worker.addEventListener("message", (e)=>{
        console.log(e.data);
    });
    return worker;
}

//usage
//setUpWorker("../worker.js", { data: dataToSearchFrom, param: "x" });