/*
*  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
*  SPDX-License-Identifier: Apache-2.0
*/

// {fact rule=sql-injection@v1.0 defects=1}
// Noncompliant: Constructs a SQL query using string interpolation.
    fn get_user(conn: &Connection, username: &str) -> Result<User, Error> {
        let query = format!("
            SELECT * FROM products 
            WHERE name LIKE '%{}%' OR description LIKE '%{}%'
        ", username);
        conn.query_row(&query, [], |row| {
        })
    }
// {/fact} 