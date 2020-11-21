const mysql = require("mysql");
const fs = require("fs");
fs.readFile(`${__dirname}/csv/total_por_estado.csv`, "utf-8" ,async (err, data)=>{
    
    let arr = await data.split(",")
    
    let conceptos = []
    for (let i = 0; i < data.length; i++) {
        if(arr[i*12]){
            conceptos.push(arr[i*12])
            
        }    
    }
    console.log(conceptos.length);
    conceptos.forEach(e => console.log(e))

})

