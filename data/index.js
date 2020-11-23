
const mysql = require("mysql");
const fs = require("fs");

//ids for develop
let concept_ids =[ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37];
// Coonnection at local database
const conect =  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "economic_app_dev"
})

conect.connect(async (err)=> {
    if (err)  throw err
    console.log("Connected!");
});

// let sql = `INSERT INTO posts (title, category, tags, status)
//                       VALUES ('First title', 'TECH' , '["Hola", "mundo"]', true)`


fs.readFile(`${__dirname}/csv/todadata.csv`, "utf-8" , (err, data)=>{
  let arr =  data.split(",")
  let count= 0
  for (let l = 0; l < arr.length-1; l++) {
    if(l%12 === 0){ 
      if (arr[l].match("Ciudad de M�xico")){
        let porcentaje_count = 1 
        for (let f = l; f < l+11; f++) {
          // (concept_ids[count] ,26, porcentaje_count,arr[l+porcentaje_count] );
          conect.query(`INSERT INTO final_datasets(cencept_id, state_id, year_id, participation_percentage) 
          VALUES(${concept_ids[count] },2, ${porcentaje_count}, ${arr[l+porcentaje_count]})`,
           (err, result) => {
              if( err) {
                  throw err
              }  
              console.log(result)
          })
          porcentaje_count++
        }             
        count++
      }
    }
  }
})

/* 
+--------------------------+------------------+------+-----+---------+----------------+
| Field                    | Type             | Null | Key | Default | Extra          |
+--------------------------+------------------+------+-----+---------+----------------+
| final_dataset_id         | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
| cencept_id               | int(10) unsigned | NO   |     | NULL    |                |
| state_id                 | int(10) unsigned | NO   |     | NULL    |                |
| year_id                  | int(10) unsigned | NO   |     | NULL    |                |
| participation_percentage | double(12,9)     | NO   |     | NULL    |                |
+--------------------------+------------------+------+-----+---------+----------------+ */


/* +----------+---------------------+  
| state_id | state               |  
+----------+---------------------+  
|        1 | Chihuahua           |  
|        2 | Ciudad de Mexico    |  
|        3 | Durango             |  
|        4 | Guanajuato          |  
|        5 | Guerrero            |  
|        6 | Hidalgo             |  
|        7 | Jalisco             |  
|        8 | Mexico              |  
|        9 | Michoacan           |  
|       10 | Morelos             |  
|       11 | Nayarit             |  
|       12 | Nuevo Leon          |  
|       13 | Oaxaca              |  
|       14 | Puebla              |  
|       15 | Queretaro           |  
|       16 | Quintana Roo        |  
|       17 | San Luis Potosi     |  
|       18 | Sinaloa             |  
|       19 | Sonora              |  
|       20 | Tabasco             |  
|       21 | Tamaulipas          |  
|       22 | Tlaxcala            |  
|       23 | Veracruz            |  
|       24 | Yucatan             |  
|       25 | Zacatecas           |  
|       26 | Aguascalientes      |  
|       27 | Baja California     |  
|       28 | Baja California Sur |  
|       29 | Campeche            |  
|       30 | Coahuila            |  
|       31 | Colima              |  
|       32 | Chiapas             |  
+----------+---------------------+              

+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| concept_id | concept                                                                                                                                                                                                                                 |
+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|          1 | Total actividades primaria por estado                                                                                                                                                                                                   |
|          2 | 11 Agricultura > cria y explotacion de animales -aprovechamiento forestal- pesca y caza                                                                                                                                                 |
|          3 | Total actividades secundarias por estado                                                                                                                                                                                                |
|          4 | 21 Mineria > Total mineria                                                                                                                                                                                                              |
|          5 | 21 Mineria > Mineria petrolera
|          6 | 21 Mineria > Mineria no petrolera                                                                                                                                                                                                       |
|          7 | 22 Generacion- transmision y distribucion de energia electrica suministro de  agua y de gas por ductos al consumidor final                                                                                                              |
|          8 | 23 Construccion por estado                                                                                                                                                                                                              |
|          9 | 31-33 Industrias manufactureras > Total industrias manufactureras                                                                                                                                                                       |
|         10 | 31-33 Industrias manufactureras > 311 Industria alimentaria                                                                                                                                                                             |
|         11 | 31-33 Industrias manufactureras > 312 Industria de las bebidas y del tabaco                                                                                                                                                             |
|         12 | 31-33 Industrias manufactureras > 313-314 Fabricacion de insumos textiles y acabado de textiles; Fabricacion de productos textiles excepto prendas de vestir                                                                            |
|         13 | 31-33 Industrias manufactureras > 315-316 Fabricacion de prendas de vestir; Curtido y acabado de cuero y piel  y fabricacion de productosde cuero piel y materiales sucedaneos                                                          |
|         14 | 31-33 Industrias manufactureras > 321 Industria de la madera                                                                                                                                                                            |
|         15 | 31-33 Industrias manufactureras > 322-323 Industrias del papel; Impresion e industrias conexas                                                                                                                                          |
|         16 | 31-33 Industrias manufactureras > 324-326 Fabricacion de productos derivados del petroleo y carbon; Industria quimica; Industria del plastico y del hule                                                                                |
|         17 | 31-33 Industrias manufactureras > 327 Fabricacion de productos a base de minerales no metalicos                                                                                                                                         |
|         18 | 31-33 Industrias manufactureras > 331-332 Industrias metalicas basicas; Fabricacion de productos metalicos                                                                                                                              |
|         19 | 31-33 Industrias manufactureras > 333-336 Fabricacion de equipo de computacion comunicacion medicion y de otros equipos componentes y accesorios electronicos electronicos; Fabricacion de accesorios aparatos electricos y equipo de g |
|         20 | 31-33 Industrias manufactureras > 337 Fabricacion de muebles colchones y persianas                                                                                                                                                      |
|         21 | 31-33 Industrias manufactureras > 339 Otras industrias manufactureras                                                                                                                                                                   |
|         22 | Total actividades terciarias por estado                                                                                                                                                                                                 |
|         23 | 43 Comercio al por mayor                                                                                                                                                                                                                |
|         24 | 46 Comercio al por menor                                                                                                                                                                                                                |
|         25 | 48-49 Transportes correos y almacenamiento                                                                                                                                                                                              |
|         26 | 51 Informacion en medios masivos                                                                                                                                                                                                        |
|         27 | 52 Servicios financieros y de seguros                                                                                                                                                                                                   |
|         28 | 53 Servicios inmobiliarios y de alquiler de bienes muebles e intangibles                                                                                                                                                                |
|         29 | 54 Servicios profesionales - cientificos y tecnicos                                                                                                                                                                                     |
|         30 | 55 Corporativos                                                                                                                                                                                                                         |
|         31 | 56 Servicios de apoyo a negocios y manejo de desechos y servicios de remediacion                                                                                                                                                        |
|         32 | 61 Servicios educativos                                                                                                                                                                                                                 |
|         33 | 62 Servicios de salud y de asistencia social                                                                                                                                                                                            |
|         34 | 71 Servicios de esparcimiento culturales y deportivos y otros servicios recreativos                                                                                                                                                     |
|         35 | 72 Servicios de alojamiento temporal y de preparacion de alimentos y bebidas                                                                                                                                                            |
|         36 | 81 Otros servicios excepto actividades gubernamentales                                                                                                                                                                                  |
|         37 | 93 Actividades legislativas gubernamentales de imparticion de justicia y de organismos internacionales y extraterritoriales                                                                                                             |
+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|
*/