const mysql = require("mysql");


const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "Anu123##reddy",
    database: "employee",
    port: 3307,
    connectionLimit: 7,
    dateStrings: true,
    multipleStatements: true
    });
    
module.exports = db;


