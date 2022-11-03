let cpuList = [];
let myNumbers = [];
let guessedNumbers = [];
let scoreCounter = 0;


function cpuNumberGenerator(min,max){

    return parseInt(Math.floor(Math.random() * (max - min + 1) + min));
};

function inputNumbers(){
    
    for(let x = 0; x < 5; x++){
        let userNumber = parseInt( prompt('inserisci un numero'));
        myNumbers.push(userNumber);
    };
    
    for(let k = 0; k < myNumbers.length; k++){
        if(cpuList.includes(myNumbers[k])){
        guessedNumbers.push(myNumbers[k])
        scoreCounter = scoreCounter + 1;
        }
    }
    console.log(scoreCounter)
    console.log(cpuList)
    console.log(myNumbers)
    
};


function start(){

    
    
    cpuList = [];
    document.getElementById('cpuNumbers').innerHTML = '';

    for(let i = 0; i < 5; i++){
        
        let cpuNumber = cpuNumberGenerator(1,99);
        if(!cpuList.includes(cpuNumber)){
            cpuList.push(cpuNumber)
        }else{
            i--
        }
    }

    document.getElementById('cpuNumbers').innerHTML = `<span>${cpuList}</span>`

    setTimeout(inputNumbers, 5000);
    
    
        
        
        
    
    
    
};