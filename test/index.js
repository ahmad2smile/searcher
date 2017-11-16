import setUpWorker from "../index";

function randomWordsArray(){
    const alphabets = "qwertyuioplkjhgfdsazxcvbnm";
    
    return Array.from({ length: 20 }, ()=>{
        const startIndex = Math.floor(Math.random() * 20);
        return alphabets.substr(startIndex, 3);
    });
}

const dataToSearchFrom = randomWordsArray();

console.log("Orignal Data", dataToSearchFrom);

setUpWorker({ data: dataToSearchFrom, param: "x" });