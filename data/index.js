// const mysql = require("mysql");

// const conect =  mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "crud_nest"
//   })

//   conect.connect((err)=> {
//     if (err) throw err;
//     // -----------------
//     console.log("Connected!");
//     var sql = `INSERT INTO posts (title, category, tags, status)
//                  VALUES ('First title', 'TECH' , '["Hola", "mundo"]', true)`
//     conect.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted", result);
//     });
//   });

// ----------------------------
const fs = require("fs");
fs.readFile(`${__dirname}/csv/secundarias.csv`, "utf-8" ,async (err, data)=>{
    
    let arr = await data.split(",")
    
    let conceptos = []
    for (let i = 0; i < data.length; i++) {
        if(arr[i*12]){
            if(true){
              conceptos.push(arr[i*12])
            }
            
        }    
    }
    console.table(conceptos);
    // conceptos.forEach(e => console.(e))

})

