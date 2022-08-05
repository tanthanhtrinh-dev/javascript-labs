 function writeLog(){
    console.log(arguments);
}
function writeLogWithFor(){

    for (const iterator of arguments) {
        
    }
    console.log(arguments);
}
writeLog('1', '2', '3', 'test');