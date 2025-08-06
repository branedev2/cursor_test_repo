# {fact rule=code-quality-error-handling@v1.0 defects=1}
def connect_db(connection_string):
    import sqlite3
    conn = sqlite3.connect(connection_string)
    return conn
# {/fact}