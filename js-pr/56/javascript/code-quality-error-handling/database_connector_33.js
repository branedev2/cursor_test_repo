// {fact rule=code-quality-error-handling@v1.0 defects=0}
function connectDatabase(connectionString) {
    const mysql = require('mysql');
    try {
        const connection = mysql.createConnection(connectionString);
        connection.connect((err) => {
            if (err) {
                console.error('Database connection error:', err.message);
                return null;
            }
        });
        return connection;
    } catch (error) {
        console.error('Database setup error:', error.message);
        return null;
    }
}
// {/fact}