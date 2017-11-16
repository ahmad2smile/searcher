import workerFunction from "./worker";

export default function setUpWorker(data) {
    const worker = new Worker(URL.createObjectURL(new Blob(["onmessage = " + workerFunction.toString()])));
    worker.postMessage(data);
    worker.addEventListener("message", (e) => {
        console.log(e.data);
    });
    return worker;
}

//usage
//setUpWorker({ data: dataToSearchFrom, param: "x" });