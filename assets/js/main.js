let cpuList = [];
let myNumbers = [];

function cpuNumberGenerator(min,max){

    return parseInt(Math.floor(Math.random() * (max - min + 1) + min));
};


function start(){

    cpuList = [];

    for(let i = 0; i < 5; i++){
        
        let cpuNumber = cpuNumberGenerator(1,99);
        if(!cpuList.includes(cpuNumber)){
            cpuList.push(cpuNumber)
        }else{
            i--
        }
    }

    
    
}