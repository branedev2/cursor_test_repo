// {fact rule=code-quality-error-handling@v1.0 defects=1}
function connectDatabase(connectionString) {
    const mysql = require('mysql');
    const connection = mysql.createConnection(connectionString);
    connection.connect();
    return connection;
}
// {/fact}