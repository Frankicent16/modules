const fs = require('fs');

fs.readFile('./sampleFile.txt', (error, data)=>{
    if(error){
        console.log("Bomb")
    }else{
        console.log(data.toString())
    }
})