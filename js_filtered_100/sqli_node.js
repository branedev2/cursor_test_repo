var mysql = require('mysql');

// // {ex-fact rule=sql-injection@v1.0 defects=1}
// const pg = require('pg');
// // ruleid:node_sqli_injection
// connection.query("SELECT * FROM bank_accounts WHERE dob = '" + req.body.dob + "' AND bank_account = '" + req.body.account_number + "'", function(error, results) {});
// // {/ex-fact}

const express = require('express');
const router = express.Router();

const sequelize = require('../conn');
router.post('/', function(req, res) {
    // {fact rule=sql-injection@v1.0 defects=1}
    // ruleid:node_sqli_injection
    var query = 'SELECT * FROM person WHERE id = \'' +
        req.body.input + '\'';
    sequelize.query(query, {
        type: sequelize.QueryTypes.SELECT,
        model: Foo
    })
        .then(function(foo) {
            res.json({ message: person });
        })
        .catch(function(err) {
            res.json({ message: err.toString() });
        });
});
// {/fact}


// // {ex-fact rule=sql-injection@v1.0 defects=1}
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: user,
//     password: pass,
//     database: 'technicalkeeda',
//     debug: false,
// });
// connection.connect();

// // ruleid:node_sqli_injection
// var employeeId = req.foo;
// var sql = "SELECT * FROM trn_employee WHERE employee_id = " + employeeId;

// connection.query(sql, function(error, results, fields) {
//     if (error) {
//         throw error;
//     }
//     console.log(results);
// });
// // {/ex-fact}


// // {ex-fact rule=sql-injection@v1.0 defects=1}
// connection.connect(function(err) {
//     // ruleid:node_sqli_injection
//     connection.query('SELECT * FROM users WHERE id = ' + req.foo('bar'), (err, res) => {});
// });

// connection.end();
// // {/ex-fact}


// // {ex-fact rule=sql-injection@v1.0 defects=1}
// const pgcon = new pg.Client({ host: host, user: user, password: pass, database: db });
// pgcon.connect();
// // ruleid:node_sqli_injection
// var inp = req.foo["id"];
// pgcon.query('SELECT * FROM users WHERE id = ' + inp, (err, res) => {});

// // {/ex-fact}


// // {ex-fact rule=sql-injection@v1.0 defects=1}
// const pg = require('pg');
// const pool = new pg.Pool(config);

// function handler(req, res) {
//     // ruleid:node_sqli_injection
//     var query1 = "SELECT FOO,BAR FROM TABLE WHERE CAT='" +
//         req.foo.bar + "' ORDER BY FOO";
//     pool.query(query1, [], function(err, results) {});
// }
// // {/ex-fact}