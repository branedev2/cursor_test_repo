/*
*  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
*  SPDX-License-Identifier: Apache-2.0
*/

// {fact rule=sql-injection@v1.0 defects=0}
// Compliant: Uses parameterized queries to safely handle user input.
    fn get_user(conn: &Connection, username: &str) -> Result<User, Error> {
        conn.query_row("SELECT * FROM users WHERE username = ?", [username], |row| {
        })
    }
// {/fact}