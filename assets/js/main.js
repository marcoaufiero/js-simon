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
    
    document.getElementById('numbersCpu').innerText = `Numeri della CPU: ${cpuList}`
    document.getElementById('myNumbers').innerText = `I tuoi numeri: ${myNumbers}`
    document.getElementById('score').innerText = `Score: ${scoreCounter}/5`
    document.getElementById('numbersGuessed').innerText = `Numeri indovinati: ${guessedNumbers}`
    
    console.log(scoreCounter)
    console.log(cpuList)
    console.log(myNumbers)
    console.log(guessedNumbers)
    
};

function hideNumbers(){
    document.getElementById('cpuNumbers').classList.add('hidenumbers')
} 

function restoreClick(){
    document.getElementById('btn').classList.remove('disablebtn');
}

function start(){

    cpuList = [];
    myNumbers = [];
    guessedNumbers = [];
    scoreCounter = 0;
    document.getElementById('cpuNumbers').innerHTML = '';
    document.getElementById('cpuNumbers').classList.remove('hidenumbers');
    document.getElementById('numbersCpu').innerText = '';
    document.getElementById('myNumbers').innerText = '';
    document.getElementById('score').innerText = '';
    document.getElementById('numbersGuessed').innerText = '';
    

    for(let i = 0; i < 5; i++){
        
        let cpuNumber = cpuNumberGenerator(1,99);
        if(!cpuList.includes(cpuNumber)){
            cpuList.push(cpuNumber)
        }else{
            i--
        }
    }

    setTimeout(hideNumbers, 5000);

    document.getElementById('cpuNumbers').innerHTML = `<span>${cpuList}</span>`

    setTimeout(inputNumbers, 5500);

    setTimeout(restoreClick, 6000)
    
};

function disableBtn(){
    document.getElementById('btn').classList.add('disablebtn');
}