
const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12839418',
    password: 'wRXYaM9RbW',
    database: 'sql12839418'
});


connection.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connection has been created");



    const createStudent = `
        CREATE TABLE IF NOT EXISTS Students (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            age INT
        )
    `;

    // Execute queries
    const queries = [createStudent];

    queries.forEach(query => {
        connection.execute(query, (err) => {
            if (err) {
                console.error("Error executing query:", err);
            }
        });
    });

    console.log("Table creation queries executed.");
});


module.exports = connection.promise();