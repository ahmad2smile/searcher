import func from "../index";


function workerCompatible(){
    return !!window.Worker;
}

function setUpWorker(workerFileName, data) {
    const worker = new Worker(workerFileName);
    worker.postMessage(data);
    worker.addEventListener("message", (e)=>{
        console.log(e.data);
    });
    return worker;
}

function randomWordsArray(){
    const alphabets = "qwertyuioplkjhgfdsazxcvbnm";
    
    return Array.from({ length: 20 }, ()=>{
        const startIndex = Math.floor(Math.random() * 20);
        return alphabets.substr(startIndex, 3);
    });
}

const dataToSearchFrom = randomWordsArray();

console.log("Orignal Data", dataToSearchFrom);

setUpWorker("../worker.js", { data: dataToSearchFrom, param: "x" });