/*  */
/*
 Actividades primarias 35=< x < 101
 Actividades Secundarias 101=< x < 728
 Actividades tercearias 728=< x <= 1255

*/
/*  */

-- CREATE TABLE IF NOT EXISTS movies(
--     movies_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT ,
--     director_id INTEGER UNSIGNED ,
--     category_id INTEGER UNSIGNED ,
--     rating_average INTEGER UNSIGNED NOT NULL DEFAULT 0,
--     title VARCHAR(100) NOT NULL  ,
--     synopsis TEXT ,
--     img_url VARCHAR(500) ,
--     year INTEGER UNSIGNED NOT NULL DEFAULT 1990
--     );


CREATE TABLE years (
    yaer_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    yaer INTEGER UNSIGNED 
);

CREATE TABLE states (
    state_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    state VARCHAR(250)
);

CREATE TABLE concepts (
    cancept_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
);